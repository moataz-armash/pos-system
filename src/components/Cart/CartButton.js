import React from "react";
import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/Context/CartContext";
import { styled } from "@mui/material/styles";

// Create a styled Badge with custom color
const GreenBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.green.main,
    color: "#fff",
  },
}));

const CartButton = ({ onClick }) => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton color="inherit" aria-label="cart" onClick={onClick}>
      <GreenBadge badgeContent={itemCount}>
        <ShoppingCart fontSize="large" />
      </GreenBadge>
      <Typography variant="body3" style={{ marginLeft: 5 }}>
        My Cart
      </Typography>
    </IconButton>
  );
};

export default CartButton;
