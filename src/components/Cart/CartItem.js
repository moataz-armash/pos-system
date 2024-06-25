import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../hooks/Context/CartContext";

const CartItem = ({ item }) => {
  const {
    selectedProducts,
    updateQuantity,
    removeFromCart,
    handleToggleProduct,
  } = useCart();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} variant="square" />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.primary">
                ${item.price.toFixed(2)}
              </Typography>
              {` x ${item.quantity}`}
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="decrease"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            <RemoveIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="increase"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            <AddIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
          <Checkbox
            checked={selectedProducts.includes(item.id)}
            onChange={() => handleToggleProduct(item.id)}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Typography variant="body2" align="right" sx={{ pr: 2, pb: 1 }}>
        Subtotal: ${(item.price * item.quantity).toFixed(2)}
      </Typography>
      <Divider />
    </>
  );
};

export default CartItem;
