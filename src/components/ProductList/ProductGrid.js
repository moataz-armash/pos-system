import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, handleAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
