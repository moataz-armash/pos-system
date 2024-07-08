import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useCart } from "../hooks/Context/CartContext";

export default function ThemeToggle({ toggleColorMode }) {
  const { isCartOpen } = useCart();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      sx={{
        position: "fixed",
        top: "50%",
        right: 16,
        transform: "translateY(-50%)",
        zIndex: 1300,
        display: isCartOpen ? "none" : "flex", // Hide the button when cart is open
      }}>
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}
