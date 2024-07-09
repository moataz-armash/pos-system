import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const CartSummary = ({ subtotal, tax, discount, totalPrice }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body1">{t("subTotal")}:</Typography>
        <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body1">{t("tax")}:</Typography>
        <Typography variant="body1">${tax.toFixed(2)}</Typography>
      </Box>
      {discount > 0 && (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body1" color="success.main">
            {t("discount")}:
          </Typography>
          <Typography variant="body1" color="success.main">
            -${discount.toFixed(2)}
          </Typography>
        </Box>
      )}
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          {t("total")}:
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartSummary;
