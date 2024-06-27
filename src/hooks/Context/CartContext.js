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
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
    setSuccessMessage("");
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
    setSuccessMessage("");
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
    setSuccessMessage("");
  };

  const clearCart = () => {
    setCart([]);
    setSelectedProducts([]);
    setBuy3Pay2AppliedProducts([]);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const applyOffer = (offerType) => {
    setErrorMessage("");
    setSuccessMessage("");
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
    let appliedOfferCount = 0;
    let alreadyAppliedCount = 0;
    let updatedCart = cart.map((product) => {
      if (!selectedProducts.includes(product.id)) {
        return product;
      }

      // If an offer is already applied, count it and don't change the product
      if (product.offerApplied) {
        alreadyAppliedCount++;
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
            return product;
          }
          break;

        case "buy1get1free":
          if (product.quantity >= 2) {
            const freeItems = Math.floor(product.quantity / 2);
            discountedQuantity = product.quantity - freeItems;
            appliedDiscount = product.price * freeItems;
          } else {
            return product;
          }
          break;

        case "buy2get1free":
          if (product.quantity >= 3) {
            const freeItems = Math.floor(product.quantity / 3);
            discountedQuantity = product.quantity - freeItems;
            appliedDiscount = product.price * freeItems;
          } else {
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
      appliedOfferCount++;

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

    // Handle messages based on the results
    if (alreadyAppliedCount > 0) {
      setErrorMessage(
        `Cannot apply more than one offer to the same product. ${alreadyAppliedCount} product already have offers applied.`
      );
      return; // Exit the function without applying new offers
    } else if (appliedOfferCount === 0) {
      setErrorMessage("No items were eligible for the selected offer.");
    } else {
      setSuccessMessage(
        `${offerType} offer has been applied to ${appliedOfferCount} product(s).`
      );
      setCart(updatedCart);
      setDiscount(totalDiscount);
      setAppliedOffer(offerType);
    }

    console.log(`Applied offer: ${offerType}`);
    console.log(`Total discount: $${totalDiscount.toFixed(2)}`);
    console.log("Updated cart:", updatedCart);
  };

  const handleToggleProduct = (productId) => {
    setSelectedProducts((prevSelected) => {
      const newSelected = prevSelected.includes(productId)
        ? prevSelected.filter((item) => item !== productId)
        : [...prevSelected, productId];
      if (newSelected.length === 0 && AppliedOffer) {
        setToggleButton(false);
      }
      setToggleButton(true);
      return newSelected;
    });
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
        successMessage,
        setSuccessMessage,
        selectedOffer,
        setSelectedOffer,
        toggleButton,
        setToggleButton,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
