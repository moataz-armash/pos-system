// Cart.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  IconButton,
  Select,
  MenuItem,
  Button,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../hooks/Context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartActions from "./CartActions";
import PaymentProcessor from "./PaymentProcessor";
import { useTranslation } from "react-i18next";

const Cart = ({ onClose }) => {
  const { t } = useTranslation();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    discount,
    applyOffer,
    errorMessage,
    setErrorMessage,
    successMessage,
    selectedOffer,
    setSelectedOffer,
    toggleButton,
    subtotal,
    tax,
    totalAmount,
  } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart"); // "cart" or "payment"
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCheckout = (selectedPaymentMethod) => {
    setPaymentMethod(selectedPaymentMethod);
    setCheckoutStep("payment");
  };

  const handlePaymentComplete = (paymentDetails) => {
    console.log("Payment completed:", paymentDetails);
    // Here you would typically send the payment details to your backend
    // and then clear the cart, show a confirmation, etc.
    if (paymentDetails.method === "cash") {
      alert(
        `Payment processed successfully! Change: $${paymentDetails.change.toFixed(
          2
        )}`
      );
    } else {
      alert("Payment processed successfully!");
    }
    setCheckoutStep("cart");
  };

  const handleGoBack = () => {
    setCheckoutStep("cart");
    setPaymentMethod("");
  };

  const handleOfferChange = (event) => {
    setSelectedOffer(event.target.value);
  };

  const handleApplyOffer = () => {
    if (!selectedOffer) {
      setErrorMessage("Please select an offer to apply.");
      return;
    }
    // Check if no products are selected after the update
    if (!toggleButton) {
      setErrorMessage("Please select at least one product to apply an offer.");
      setSelectedOffer("");
      return;
    }

    applyOffer(selectedOffer);

    applyOffer(selectedOffer);
    setSelectedOffer(""); // Reset the select value
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ width: 300, p: 2, position: "relative" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ alignSelf: "flex-start" }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          {t("yourCart")}
        </Typography>
        {errorMessage ? (
          <Typography color="error" variant="body2">
            {errorMessage}
          </Typography>
        ) : (
          successMessage && (
            <Typography color="success.light" variant="body2">
              {successMessage}
            </Typography>
          )
        )}
      </Box>
      {cart.length === 0 ? (
        <Typography>{t("YourCartIsEmpty")}</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </List>
          {cart.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Select
                value={selectedOffer}
                onChange={handleOfferChange}
                displayEmpty
                fullWidth
                color="lightGreen"
                sx={{ mb: 1 }}>
                <MenuItem value="" disabled>
                  {t("selectAnOffer")}
                </MenuItem>
                <MenuItem value="buy3pay2">{t("Buy3Pay2")}</MenuItem>
                <MenuItem value="buy1get1free">{t("1buy1free")}</MenuItem>
                <MenuItem value="20percentoff">{t("20off")}</MenuItem>
                <MenuItem value="50percentoff">{t("50off")}</MenuItem>
              </Select>
              <Button
                variant="outlined"
                color="green"
                sx={{ color: "green" }}
                fullWidth
                onClick={handleApplyOffer}>
                {t("applyOffer")}
              </Button>
            </Box>
          )}
          <CartSummary
            totalPrice={totalAmount}
            subtotal={subtotal}
            tax={tax}
            discount={discount}
          />
          {checkoutStep === "cart" ? (
            <CartActions
              onCheckout={handleCheckout}
              total={totalAmount}
              onClear={clearCart}
            />
          ) : (
            <PaymentProcessor
              total={totalAmount}
              paymentMethod={paymentMethod}
              onPaymentComplete={handlePaymentComplete}
              onGoBack={handleGoBack}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Cart;
