import React from "react";
import { Container, Grid } from "@mui/material";
import ProductList from "./ProductList";

const CashierSystem = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CashierSystem;
