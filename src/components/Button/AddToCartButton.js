import React from "react";
import { Button, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/Context/CartContext";

const AddToCartButton = ({ product, quantity, setQuantity }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (cartQuantity === 0) {
      addToCart({ ...product, quantity: quantity });
    } else {
      updateQuantity(product.id, cartQuantity + quantity);
    }
    setQuantity(1); // Reset quantity to 1 after adding to cart
    console.log(`Added ${quantity} of ${product.name} to cart`); // Debug log
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleDecreaseQuantity = () => {
    if (cartQuantity > 1) {
      updateQuantity(product.id, cartQuantity - 1);
    } else {
      handleRemoveFromCart();
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, cartQuantity + 1);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      {cartQuantity === 0 ? (
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddToCart}
            fullWidth
            sx={{ height: "36px" }}>
            Add {quantity} to Cart
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
              {cartQuantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ mx: 1, minWidth: "20px", textAlign: "center" }}>
              {cartQuantity}
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
