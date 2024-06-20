import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({
  product,
  selectedProducts,
  handleDecrement,
  handleIncrement,
  handleRemoveFromCart,
  handleToggleProduct,
}) => {
  return (
    <ListItem key={product.id} divider>
      <ListItemText primary={product.name} secondary={`$${product.price}`} />
      <IconButton
        aria-label="decrement"
        onClick={() => handleDecrement(product)}>
        <Typography variant="h6">-</Typography>
      </IconButton>
      <TextField
        type="number"
        value={product.quantity}
        InputProps={{ readOnly: true }}
        style={{ width: 60, textAlign: "center" }}
      />
      <IconButton
        aria-label="increment"
        onClick={() => handleIncrement(product)}>
        <Typography variant="h6">+</Typography>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => handleRemoveFromCart(product)}>
        <DeleteIcon />
      </IconButton>
      <Checkbox
        checked={selectedProducts.includes(product.id)}
        onChange={() => handleToggleProduct(product.id)}
      />
    </ListItem>
  );
};

export default CartItem;
