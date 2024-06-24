import React from "react";
import { Box, Button } from "@mui/material";

const CartActions = ({ onClear, onCheckout }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      <Button variant="outlined" onClick={onClear}>
        Clear Cart
      </Button>
      <Button variant="contained" onClick={onCheckout}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartActions;
