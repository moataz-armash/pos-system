import React from "react";
import { Container, Grid } from "@mui/material";
import ShoppingCart from "./ShoppingCart";
import { CartProvider } from "../../hooks/Context/CartContext";
import ProductList from "../../components/ProductList/ProductList";

const CashierSystem = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item>
          {/* <CartProvider>
            <ProductList />
          </CartProvider> */}
        </Grid>
        <Grid item>
          <CartProvider>
            <ShoppingCart />
          </CartProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CashierSystem;
