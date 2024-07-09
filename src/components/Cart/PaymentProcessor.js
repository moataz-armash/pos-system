import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Grid,
  Alert,
} from "@mui/material";
import { useCashPayment } from "../../hooks/useCashPayment";
import { useCreditCardPayment } from "../../hooks/useCreditCardPayment";
import { useEInvoice } from "../../hooks/useEInvoice";
import VirtualInvoice from "./VirtualInvoice";
import { useCart } from "../../hooks/Context/CartContext";
import { useTranslation } from "react-i18next";

const PaymentProcessor = ({
  total,
  paymentMethod,
  onPaymentComplete,
  onGoBack,
}) => {
  const { t } = useTranslation();
  const { cart, subtotal, tax, totalAmount, discount } = useCart();
  const { amountPaid, setAmountPaid, change, handleCashPayment } =
    useCashPayment(total, onPaymentComplete);
  const {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    handleCreditCardPayment,
  } = useCreditCardPayment(onPaymentComplete);
  const { handleSendEInvoice } = useEInvoice(paymentMethod, amountPaid);
  const [showInvoice, setShowInvoice] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAmountSufficient, setIsAmountSufficient] = useState(false);

  useEffect(() => {
    if (paymentMethod === "cash") {
      setIsAmountSufficient(parseFloat(amountPaid) >= total);
    } else {
      setIsAmountSufficient(cardNumber && expiryDate && cvv);
    }
  }, [amountPaid, total, paymentMethod, cardNumber, expiryDate, cvv]);

  const handleShowInvoice = () => {
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
  };

  const handlePayment = () => {
    if (paymentMethod === "cash") {
      if (parseFloat(amountPaid) >= total) {
        handleCashPayment();
        setErrorMessage("");
      } else {
        setErrorMessage(
          "The amount paid is insufficient. Please enter an amount equal to or greater than the total."
        );
      }
    } else {
      if (cardNumber && expiryDate && cvv) {
        handleCreditCardPayment();
        setErrorMessage("");
      } else {
        setErrorMessage("Please fill in all credit card details.");
      }
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">
        {t("total")}: ${total.toFixed(2)}
      </Typography>
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          {paymentMethod === "cash" ? (
            <Box>
              <TextField
                label={t("amountPaid")}
                type="number"
                value={amountPaid}
                color="green"
                onChange={(e) => setAmountPaid(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              {change !== null && (
                <Typography sx={{ mb: 2 }}>
                  {t("change")}: ${change.toFixed(2)}
                </Typography>
              )}
            </Box>
          ) : (
            <Box>
              <TextField
                label={t("cardNumber")}
                value={cardNumber}
                color="green"
                onChange={(e) => setCardNumber(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label={t("expiredDate")}
                color="green"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="CVV"
                color="green"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button variant="outlined" color="error" onClick={onGoBack}>
            {t("goBack")}
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="green"
            onClick={handlePayment}
            sx={{ color: "white" }}
            disabled={!isAmountSufficient}>
            {t("process")}{" "}
            {paymentMethod === "cash" ? t("cash") : t("creditCard")}
            {t("payment")}
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="green"
            onClick={handleSendEInvoice}
            sx={{ mt: 2, mr: 2 }}
            disabled={!isAmountSufficient}>
            {t("sendEInvoice")}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="green"
            onClick={handleShowInvoice}
            sx={{ mt: 2 }}
            disabled={!isAmountSufficient}>
            {t("viewInvoice")}
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={showInvoice}
        onClose={handleCloseInvoice}
        aria-labelledby="virtual-invoice-modal"
        aria-describedby="virtual-invoice-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxHeight: "90vh",
            overflowY: "auto",
          }}>
          <VirtualInvoice
            cart={cart}
            subtotal={subtotal}
            tax={tax}
            discount={discount}
            totalAmount={totalAmount}
            paymentMethod={paymentMethod}
            amountPaid={amountPaid}
            onClose={handleCloseInvoice}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default PaymentProcessor;
