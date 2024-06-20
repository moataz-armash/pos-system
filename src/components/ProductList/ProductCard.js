import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Paper)({
  padding: 20,
  textAlign: "center",
  height: "100%", // Ensure it takes the full height of the grid item
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
});

const ImageContainer = styled(Box)({
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  marginBottom: 2,
});

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
      </ImageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          ${product.price}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddToCart(product)}>
        Add to Cart
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
