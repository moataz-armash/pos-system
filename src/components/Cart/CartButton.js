import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/Context/CartContext";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
// Create a styled Box for the circular quantity indicator
const QuantityCircle = styled(Box)(({ theme }) => ({
  backgroundColor: "#029199", // Custom color for the background
  color: "#fff",
  borderRadius: "50%",
  width: 25,
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 8, // Adjust spacing between cart icon and quantity circle
}));

const CartButton = ({ onClick }) => {
  const { t } = useTranslation();
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton color="inherit" aria-label="cart" onClick={onClick}>
      <ShoppingCart fontSize="large" />

      <Typography variant="body2" style={{ marginLeft: 5 }}>
        {t("myCart")}
      </Typography>
      {itemCount > 0 && (
        <QuantityCircle padding={1}>
          <Typography variant="body2">{itemCount}</Typography>
        </QuantityCircle>
      )}
    </IconButton>
  );
};

export default CartButton;
