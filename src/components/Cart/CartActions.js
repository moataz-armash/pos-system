import React from "react";
import { Box, Button } from "@mui/material";

const CartActions = ({ onClear, onCheckout }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      <Button variant="outlined" color="error" onClick={onClear}>
        Clear Cart
      </Button>
      <Button
        variant="contained"
        color="green"
        sx={{ color: "white" }}
        onClick={onCheckout}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartActions;
