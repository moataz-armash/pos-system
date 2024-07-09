import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
const TAX_RATE = 0.1;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const savedSelectedProducts = localStorage.getItem("selectedProducts");
    return savedSelectedProducts ? JSON.parse(savedSelectedProducts) : [];
  });
  const [quantity, setQuantity] = useState(1);
  const [buy3Pay2AppliedProducts, setBuy3Pay2AppliedProducts] = useState(() => {
    const savedAppliedProducts = localStorage.getItem(
      "buy3Pay2AppliedProducts"
    );
    return savedAppliedProducts ? JSON.parse(savedAppliedProducts) : [];
  });
  const [discount, setDiscount] = useState(() => {
    const savedDiscount = localStorage.getItem("discount");
    return savedDiscount ? parseFloat(savedDiscount) : 0;
  });
  const [AppliedOffer, setAppliedOffer] = useState(() => {
    const savedAppliedOffer = localStorage.getItem("appliedOffer");
    return savedAppliedOffer || 0;
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(() => {
    const savedSelectedOffer = localStorage.getItem("selectedOffer");
    return savedSelectedOffer || "";
  });
  const [toggleButton, setToggleButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(() => {
    const savedDisplay = localStorage.getItem("display");
    return savedDisplay || "1";
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
    localStorage.setItem(
      "buy3Pay2AppliedProducts",
      JSON.stringify(buy3Pay2AppliedProducts)
    );
    localStorage.setItem("discount", discount.toString());
    localStorage.setItem("appliedOffer", AppliedOffer.toString());
    localStorage.setItem("selectedOffer", selectedOffer);
    localStorage.setItem("display", display);
  }, [
    cart,
    selectedProducts,
    buy3Pay2AppliedProducts,
    discount,
    AppliedOffer,
    selectedOffer,
    display,
  ]);

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
    setDiscount(0);
    setAppliedOffer(0);
    setSelectedOffer("");
  };

  const applyOffer = (offerType) => {
    setErrorMessage("");
    setSuccessMessage("");
    const validOffers = [
      "buy3pay2",
      "buy1get1free",
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

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const onQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const newTotal = calculateTotalPrice();
  const originalTotal = calculateTotalPrice();

  const subtotal = calculateTotalPrice();
  const tax = subtotal * TAX_RATE;
  const totalAmount = subtotal + tax - discount;

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
        display,
        setDisplay,
        handleCartClick,
        isCartOpen,
        setIsCartOpen,
        newTotal,
        originalTotal,
        subtotal,
        tax,
        totalAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
