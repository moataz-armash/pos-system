import React from "react";
import { Box, Typography, List } from "@mui/material";
import { useCart } from "../../hooks/Context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartActions from "./CartActions";

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </List>
          <CartSummary totalPrice={totalPrice} />
          <CartActions onClear={clearCart} onCheckout={onClose} />
        </>
      )}
    </Box>
  );
};

export default Cart;
