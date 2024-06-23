import React from "react";
import { Box, Typography } from "@mui/material";

const CartSummary = ({ totalPrice }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      <Typography variant="subtitle1">Total:</Typography>
      <Typography variant="subtitle1">${totalPrice.toFixed(2)}</Typography>
    </Box>
  );
};

export default CartSummary;
