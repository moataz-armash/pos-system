import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [buy3Pay2AppliedProducts, setBuy3Pay2AppliedProducts] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [AppliedOffer, setAppliedOffer] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
    console.log("Cart after adding:", cart); // Debug log
    setErrorMessage("");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      const updatedSelected = selectedProducts.filter(
        (item) => item !== productId
      );
      const updatedApplied = buy3Pay2AppliedProducts.filter(
        (item) => item !== productId
      );
      setDiscount(0); // Reset discount when removing product
      setSelectedProducts(updatedSelected);
      setBuy3Pay2AppliedProducts(updatedApplied);
      return updatedCart;
    });
    setErrorMessage("");
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && newQuantity >= 0
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    console.log("Cart after updating quantity:", cart); // Debug log
    setErrorMessage("");
  };

  const clearCart = () => {
    setCart([]);
    setSelectedProducts([]);
    setBuy3Pay2AppliedProducts([]);
    setErrorMessage("");
  };

  const applyOffer = (offerType) => {
    setErrorMessage("");
    const validOffers = [
      "buy3pay2",
      "buy1get1free",
      "buy2get1free",
      "20percentoff",
      "50percentoff",
    ];
    if (!validOffers.includes(offerType)) {
      console.error(`Invalid offer type: ${offerType}`);
      return;
    }

    let totalDiscount = 0;
    let updatedCart = cart.map((product) => {
      if (!selectedProducts.includes(product.id)) {
        return product;
      }

      // If an offer is already applied, don't change it
      if (product.offerApplied) {
        totalDiscount += product.appliedDiscount || 0;
        return product;
      }

      let discountedPrice = product.price;
      let discountedQuantity = product.quantity;
      let appliedDiscount = 0;

      switch (offerType) {
        case "buy3pay2":
          if (product.quantity >= 3) {
            const freeItems = Math.floor(product.quantity / 3);
            discountedQuantity = product.quantity - freeItems;
            appliedDiscount = product.price * freeItems;
          } else {
            setErrorMessage(
              `The quantity of ${product.name} must be at least 3 for Buy 3 Pay 2 offer`
            );
            return product;
          }
          break;

        case "buy1get1free":
          if (product.quantity >= 2) {
            const freeItems = Math.floor(product.quantity / 2);
            discountedQuantity = product.quantity - freeItems;
            appliedDiscount = product.price * freeItems;
          } else {
            setErrorMessage(
              `The quantity of ${product.name} must be at least 2 for Buy 1 Get 1 Free offer`
            );
            return product;
          }
          break;

        case "buy2get1free":
          if (product.quantity >= 3) {
            const freeItems = Math.floor(product.quantity / 3);
            discountedQuantity = product.quantity - freeItems;
            appliedDiscount = product.price * freeItems;
          } else {
            setErrorMessage(
              `The quantity of ${product.name} must be at least 3 for Buy 2 Get 1 Free offer`
            );
            return product;
          }
          break;

        case "20percentoff":
          discountedPrice = product.price * 0.8;
          appliedDiscount = product.price * product.quantity * 0.2;
          break;

        case "50percentoff":
          discountedPrice = product.price * 0.5;
          appliedDiscount = product.price * product.quantity * 0.5;
          break;

        default:
          break;
      }

      const effectivePrice =
        (discountedPrice * discountedQuantity) / product.quantity;

      totalDiscount += appliedDiscount;

      return {
        ...product,
        discountedPrice: effectivePrice,
        discountedQuantity,
        originalPrice: product.price,
        originalQuantity: product.quantity,
        appliedDiscount,
        offerApplied: offerType,
      };
    });

    setCart(updatedCart);
    setDiscount(totalDiscount);
    setAppliedOffer(offerType);

    console.log(`Applied offer: ${offerType}`);
    console.log(`Total discount: $${totalDiscount.toFixed(2)}`);
    console.log("Updated cart:", updatedCart);
  };

  // const applyBuy3Pay2 = () => {
  //   let totalDiscount = 0;
  //   let totalDiscountedItems = 0;

  //   const updatedCart = cart.map((product) => {
  //     if (
  //       selectedProducts.includes(product.id) &&
  //       product.quantity >= 3 &&
  // product.discountApplied
  //     ) {
  //       const discountedItems = 1; // Always discount 1 item per product
  //       const discountAmount = product.originalPrice || product.price; // Use original price if available

  //       totalDiscount += discountAmount;
  //       totalDiscountedItems += discountedItems;

  //       const newQuantity = product.quantity - discountedItems;

  //       return {
  //         ...product,
  //         quantity: newQuantity,
  //         originalPrice: product.originalPrice || product.price, // Store original price
  //         discountedItems: discountedItems,
  //         discountApplied: true, // Mark that discount has been applied
  //       };
  //     }
  //     return product;
  //   });

  //   setDiscount((prevDiscount) => prevDiscount + totalDiscount);
  //   setCart(updatedCart);
  //   setDiscountedItemCount((prevCount) => prevCount + totalDiscountedItems);
  // };
  const handleToggleProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((item) => item !== productId)
        : [...prevSelected, productId]
    );
    setErrorMessage("");
  };

  const onQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        quantity,
        setQuantity,
        discount,
        onQuantityChange,
        applyOffer,
        handleToggleProduct,
        selectedProducts,
        errorMessage,
        setErrorMessage,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
