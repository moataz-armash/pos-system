import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const PaymentProcessor = ({
  total,
  paymentMethod,
  onPaymentComplete,
  onGoBack,
}) => {
  const [amountPaid, setAmountPaid] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [change, setChange] = useState(null);

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
    } else {
      alert("Insufficient amount");
    }
  };

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

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      {paymentMethod === "cash" ? (
        <Box>
          <TextField
            label="Amount Paid"
            type="number"
            value={amountPaid}
            color="green"
            onChange={(e) => setAmountPaid(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="green"
            onClick={handleCashPayment}
            sx={{ mt: 2, mr: 2, color: "white" }}>
            Process Cash Payment
          </Button>
          {change !== null && (
            <Typography sx={{ mt: 2 }}>Change: ${change.toFixed(2)}</Typography>
          )}
        </Box>
      ) : (
        <Box>
          <TextField
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreditCardPayment}
            sx={{ mt: 2, mr: 2 }}>
            Process Credit Card Payment
          </Button>
        </Box>
      )}
      <Button
        variant="outlined"
        color="secondary"
        onClick={onGoBack}
        sx={{ mt: 2 }}>
        Go Back
      </Button>
    </Box>
  );
};

export default PaymentProcessor;
