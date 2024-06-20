import React, { createContext, useState } from "react";

const CartContext = createContext();
const TAX_RATE = 0.1; // 10% tax

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [buy3Pay2AppliedProducts, setBuy3Pay2AppliedProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      const updatedSelected = selectedProducts.filter(
        (item) => item !== product.id
      );
      const updatedApplied = buy3Pay2AppliedProducts.filter(
        (item) => item !== product.id
      );
      setDiscount(0); // Reset discount when removing product
      setSelectedProducts(updatedSelected);
      setBuy3Pay2AppliedProducts(updatedApplied);
      return updatedCart;
    });
  };

  const handleQuantityChange = (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
    setDiscount(0);
    setSelectedProducts([]);
    setBuy3Pay2AppliedProducts([]);
  };

  const handleToggleProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((item) => item !== productId)
        : [...prevSelected, productId]
    );
  };

  const applyBuy3Pay2 = () => {
    // Check if the discount has already been applied
    if (discount > 0) {
      alert("Buy 3 Pay 2 discount has already been applied.");
      return;
    }

    const productQuantityMap = new Map();
    cart.forEach((product) => {
      const currentQuantity = productQuantityMap.get(product.id) || 0;
      productQuantityMap.set(product.id, currentQuantity + product.quantity);
    });

    let totalDiscount = 0;

    const updatedCart = cart.map((product) => {
      const currentQuantity = productQuantityMap.get(product.id) || 0;
      const freeItems = Math.floor(currentQuantity / 3); // Calculate free items
      const discountAmount = freeItems * product.price; // Calculate discount amount

      if (
        selectedProducts.includes(product.id) && // Apply only for selected products
        freeItems > 0 &&
        currentQuantity >= 3
      ) {
        totalDiscount += discountAmount;
      }

      return product;
    });

    setDiscount(totalDiscount);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalAmount = subtotal + subtotal * TAX_RATE - discount;

  return (
    <CartContext.Provider
      value={{
        cart,
        discount,
        selectedProducts,
        buy3Pay2AppliedProducts,
        handleAddToCart,
        handleRemoveFromCart,
        handleQuantityChange,
        handleClearCart,
        handleToggleProduct,
        applyBuy3Pay2,
        subtotal,
        totalAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
