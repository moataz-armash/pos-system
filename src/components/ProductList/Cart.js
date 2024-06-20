import React from "react";
import { Paper, Typography, List, Button } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  selectedProducts,
  handleDecrement,
  handleIncrement,
  handleRemoveFromCart,
  handleToggleProduct,
  subtotal,
  totalAmount,
  applyBuy3Pay2,
  handleClearCart,
}) => {
  return (
    <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
      <Typography variant="h6">Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" style={{ marginTop: 10 }}>
          Your cart is empty. Please add something.
        </Typography>
      ) : (
        <>
          <List>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                selectedProducts={selectedProducts}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleRemoveFromCart={handleRemoveFromCart}
                handleToggleProduct={handleToggleProduct}
              />
            ))}
          </List>
          <Typography variant="h6" style={{ padding: 10 }}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
          <Typography variant="h6" style={{ padding: 10 }}>
            Total Amount: ${totalAmount.toFixed(2)}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}>
            <Button variant="contained" color="primary" onClick={applyBuy3Pay2}>
              Apply Buy 3 Pay 2
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </Paper>
  );
};

export default Cart;
