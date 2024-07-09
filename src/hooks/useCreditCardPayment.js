// hooks/useCreditCardPayment.js
import { useState } from "react";

export const useCreditCardPayment = (onPaymentComplete) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCreditCardPayment = () => {
    if (cardNumber && expiryDate && cvv) {
      onPaymentComplete({
        method: "creditCard",
        cardNumber: cardNumber.slice(-4),
      });
    } else {
      alert("Please fill in all credit card details");
    }
  };

  return {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    handleCreditCardPayment,
  };
};
