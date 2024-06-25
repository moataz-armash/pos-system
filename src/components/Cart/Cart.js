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

const TAX_RATE = 0.1;

const Cart = ({ onClose }) => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    discount,
    applyOffer,
    errorMessage,
  } = useCart();
  const [selectedOffer, setSelectedOffer] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleOfferChange = (event) => {
    setSelectedOffer(event.target.value);
  };

  const handleApplyOffer = () => {
    if (!selectedOffer) {
      setSnackbarMessage("Please select an offer to apply.");
      setOpenSnackbar(true);
      return;
    }

    const originalTotal = calculateTotalPrice();
    applyOffer(selectedOffer);
    const newTotal = calculateTotalPrice();
    const savings = originalTotal - newTotal;

    applyOffer(selectedOffer);
    setSelectedOffer(""); // Reset the select value

    // setSnackbarMessage(`Offer applied! You saved $${savings.toFixed(2)}`);
    // setOpenSnackbar(true);
    // setSelectedOffer("");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const subtotal = calculateTotalPrice();
  const totalAmount = subtotal + subtotal * TAX_RATE - discount;

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
          Your Cart
        </Typography>
        {errorMessage && (
          <Typography color="error" variant="body2">
            {errorMessage}
          </Typography>
        )}
      </Box>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
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
                sx={{ mb: 1 }}>
                <MenuItem value="" disabled>
                  Select an offer
                </MenuItem>
                <MenuItem value="buy3pay2">Buy 3 Pay 2</MenuItem>
                <MenuItem value="buy1get1free">Buy 1 Get 1 Free</MenuItem>
                <MenuItem value="buy2get1free">Buy 2 Get 1 Free</MenuItem>
                <MenuItem value="20percentoff">20% Off</MenuItem>
                <MenuItem value="50percentoff">50% Off</MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleApplyOffer}>
                Apply Offer
              </Button>
            </Box>
          )}
          <CartSummary totalPrice={totalAmount} />
          <CartActions onClear={clearCart} onCheckout={onClose} />
        </>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default Cart;
