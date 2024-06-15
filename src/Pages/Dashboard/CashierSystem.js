import React from "react";
import { Container, Grid } from "@mui/material";
import ProductList from "./ProductList";
import Calculator from "./Calculator";

const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
  { name: "Product 4", price: 40 },
  { name: "Product 5", price: 50 },
  // Add more products as needed
];

const CashierSystem = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ProductList products={products} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Calculator />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CashierSystem;
