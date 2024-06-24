import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useCart } from "../../hooks/Context/CartContext";
import GreenButton from "../Button/GreenButton";
import AddToCartButton from "../Button/AddToCartButton";

const ProductList = ({
  products,
  searchQuery,
  selectedSubcategory,
  onProductSelect,
  quantity,
  setQuantity,
}) => {
  const { addToCart, removeFromCart, updateQuantity, getQuantity } = useCart();
  const noMatchingProducts = products.length === 0 && searchQuery;

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantity });
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {/* To display filtered Products filtered by search bar  */}
        {searchQuery &&
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: 10,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                />
                <Typography variant="subtitle1">{product.name}</Typography>
                <Typography variant="body2">
                  ${product.price.toFixed(2)}
                </Typography>
                <AddToCartButton
                  key={product.id}
                  product={product}
                  getQuantity={getQuantity}
                  addToCart={() => handleAddToCart(product)}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </Paper>
            </Grid>
          ))}
        {/* To display products when choose subcategory  */}
        {selectedSubcategory &&
          !searchQuery &&
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: 10,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                />
                <Typography variant="subtitle1">{product.name}</Typography>
                <Typography variant="body2">
                  ${product.price.toFixed(2)}
                </Typography>
                <AddToCartButton
                  key={product.id}
                  product={product}
                  getQuantity={getQuantity}
                  addToCart={() => handleAddToCart(product)}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </Paper>
            </Grid>
          ))}
      </Grid>
      {noMatchingProducts && (
        <Typography variant="h6" color="error">
          There is no product like this!
        </Typography>
      )}
    </>
  );
};

export default ProductList;
