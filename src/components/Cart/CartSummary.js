import React from "react";
import { Box, Typography } from "@mui/material";

const CartSummary = ({ totalPrice }) => {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h5">Total:</Typography>
      <Typography variant="h5">${totalPrice.toFixed(2)}</Typography>
    </Box>
  );
};

export default CartSummary;
