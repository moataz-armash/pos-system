// hooks/useCreditCardPayment.js
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useCreditCardPayment = (onPaymentComplete) => {
  const { t } = useTranslation();
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
      alert(t("pleaseFill"));
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
