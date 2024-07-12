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

  // Add null checks and default values
  const name = item?.name || "Unknown Item";
  const image = item?.image || "";
  const price = item?.price || 0;
  const quantity = item?.quantity || 0;
  const id = item?.id;

  if (!id) {
    return null; // Don't render anything if the item is invalid
  }

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={name} src={image} variant="square" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.primary">
                ${price.toFixed(2)}
              </Typography>
              {` x ${quantity}`}
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="decrease"
            onClick={() => updateQuantity(id, quantity - 1)}>
            <RemoveIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="increase"
            onClick={() => updateQuantity(id, quantity + 1)}>
            <AddIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeFromCart(id)}>
            <DeleteIcon />
          </IconButton>
          <Checkbox
            checked={selectedProducts.includes(id)}
            onChange={() => handleToggleProduct(id)}
            color="green"
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Typography variant="body1" align="right" sx={{ pr: 2, pb: 1 }}>
        Subtotal: ${(price * quantity).toFixed(2)}
      </Typography>
      <Divider />
    </>
  );
};

export default CartItem;
