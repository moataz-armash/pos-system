import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ShoppingCart from "./ShoppingCart";
import NumberPad from "../../components/ProductList/NumberPad"; // Make sure this path is correct
import { CartProvider } from "../../hooks/Context/CartContext";

const CashierSystem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <CartProvider>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <ShoppingCart quantity={quantity} setQuantity={setQuantity} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NumberPad onQuantityChange={handleQuantityChange} />
          </Grid>
        </Grid>
      </CartProvider>
    </Container>
  );
};

export default CashierSystem;
