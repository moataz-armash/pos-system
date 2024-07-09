// hooks/useCashPayment.js
import { useState } from "react";
import { useCart } from "./Context/CartContext";
import { useTranslation } from "react-i18next";

export const useCashPayment = (total, onPaymentComplete) => {
  const { t } = useTranslation();
  const [amountPaid, setAmountPaid] = useState("");
  const [change, setChange] = useState(null);
  const { clearCart } = useCart();

  const handleCashPayment = () => {
    const paid = parseFloat(amountPaid);
    if (paid >= total) {
      const changeAmount = paid - total;
      setChange(changeAmount);
      onPaymentComplete({
        method: "cash",
        amountPaid: paid,
        change: changeAmount,
      });
      clearCart();
    } else {
      alert(t("inceffientAmount"));
    }
  };

  return { amountPaid, setAmountPaid, change, handleCashPayment };
};
