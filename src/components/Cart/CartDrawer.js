import React from "react";
import { Drawer } from "@mui/material";
import Cart from "./Cart";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Cart onClose={onClose} />
    </Drawer>
  );
};

export default CartDrawer;
