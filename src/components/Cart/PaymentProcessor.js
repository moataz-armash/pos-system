import React, { useState } from "react";
import { Box, Typography, TextField, Button, Modal, Grid } from "@mui/material";
import { useCashPayment } from "../../hooks/useCashPayment";
import { useCreditCardPayment } from "../../hooks/useCreditCardPayment";
import { useEInvoice } from "../../hooks/useEInvoice";
import VirtualInvoice from "./VirtualInvoice";
import { useCart } from "../../hooks/Context/CartContext";

const PaymentProcessor = ({
  total,
  paymentMethod,
  onPaymentComplete,
  onGoBack,
}) => {
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

  const handleShowInvoice = () => {
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          {paymentMethod === "cash" ? (
            <Box>
              <TextField
                label="Amount Paid"
                type="number"
                value={amountPaid}
                color="green"
                onChange={(e) => setAmountPaid(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              {change !== null && (
                <Typography sx={{ mb: 2 }}>
                  Change: ${change.toFixed(2)}
                </Typography>
              )}
            </Box>
          ) : (
            <Box>
              <TextField
                label="Card Number"
                value={cardNumber}
                color="green"
                onChange={(e) => setCardNumber(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Expiry Date"
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
            Go Back
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {paymentMethod === "cash" ? (
            <Button
              variant="contained"
              color="green"
              onClick={handleCashPayment}
              sx={{ color: "white" }}
              disabled={!amountPaid}>
              Process Cash Payment
            </Button>
          ) : (
            <Button
              variant="contained"
              color="green"
              onClick={handleCreditCardPayment}
              sx={{ color: "white" }}>
              Process Credit Card Payment
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="green"
            onClick={handleSendEInvoice}
            sx={{ mt: 2, mr: 2 }}>
            Send E-Invoice
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="green"
            onClick={handleShowInvoice}
            sx={{ mt: 2 }}>
            View Invoice
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
