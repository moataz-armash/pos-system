import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ShoppingCart from "./ShoppingCart";
import NumberPad from "../../components/ProductList/NumberPad"; // Make sure this path is correct
import { CartProvider } from "../../hooks/Context/CartContext";

const CashierSystem = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <CartProvider>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <ShoppingCart />
          </Grid>
          <Grid item xs={12} md={4}>
            <NumberPad />
          </Grid>
        </Grid>
      </CartProvider>
    </Container>
  );
};

export default CashierSystem;
