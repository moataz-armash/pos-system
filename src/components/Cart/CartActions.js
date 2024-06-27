import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CartActions = ({ onClear, onCheckout, total }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (paymentMethod) {
      onCheckout(paymentMethod);
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }} color="green">
        <InputLabel>Payment Method</InputLabel>
        <Select
          value={paymentMethod}
          label="Payment Method"
          onChange={handlePaymentMethodChange}>
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="creditCard">Credit Card</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="error" onClick={onClear}>
          Clear Cart
        </Button>
        <Button
          variant="contained"
          color="green"
          sx={{ color: "white" }}
          onClick={handleCheckout}
          disabled={!paymentMethod}>
          Checkout (${total.toFixed(2)})
        </Button>
      </Box>
    </Box>
  );
};

export default CartActions;
