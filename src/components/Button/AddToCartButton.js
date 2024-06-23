import React from "react";
import { Button, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/Context/CartContext";

const AddToCartButton = ({ product }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      handleRemoveFromCart();
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      {quantity === 0 ? (
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddToCart}
            fullWidth
            sx={{ height: "36px" }}>
            Add to Cart
          </Button>
        </Grid>
      ) : (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}>
          <Grid item>
            <IconButton
              color="primary"
              onClick={handleDecreaseQuantity}
              size="small">
              {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ mx: 1, minWidth: "20px", textAlign: "center" }}>
              {quantity}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              onClick={handleIncreaseQuantity}
              size="small">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default AddToCartButton;
