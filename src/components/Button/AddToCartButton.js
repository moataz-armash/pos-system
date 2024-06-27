import { React, useState } from "react";
import { Button, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/Context/CartContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AddToCartButton = ({ product }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    quantity,
    setQuantity,
    setDisplay,
  } = useCart();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const cartItem = cart.find((item) => item.id === product.id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (cartQuantity === 0) {
      addToCart({ ...product, quantity: quantity });
    } else {
      updateQuantity(product.id, cartQuantity + quantity);
    }
    setQuantity(1);
    showSnackbar(`Added ${quantity} of ${product.name} to cart`);
    console.log(`Added ${quantity} of ${product.name} to cart`); // Debug log
    setDisplay("1");
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
            variant="outlined"
            onClick={handleAddToCart}
            fullWidth
            sx={{
              height: "36px",
              color: "#01666b",
              borderColor: "#01666b",
              "&:hover": {
                backgroundColor: "#e0f7fa",
                borderColor: "#01666b",
              },
            }}>
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
              size="small"
              sx={{ color: "#01666b" }}>
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
              size="small"
              sx={{ color: "#01666b" }}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default AddToCartButton;
