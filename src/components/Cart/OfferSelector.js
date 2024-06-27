import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const OfferSelector = ({ cart, applyOffer, updateQuantity }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleOfferApply = (offerId) => {
    const selectedProducts = Object.keys(selectedItems).filter(
      (id) => selectedItems[id]
    );
    selectedProducts.forEach((productId) => {
      const item = cart.find((item) => item.id === productId);
      if (item) {
        const newQuantity = applyOffer(item.quantity, offerId);
        updateQuantity(productId, newQuantity, offerId);
      }
    });
    setSelectedItems({});
  };

  const handleCheckboxChange = (event, itemId) => {
    setSelectedItems((prev) => ({ ...prev, [itemId]: event.target.checked }));
  };

  const offers = [
    { id: "3buy2pay", label: "Buy 3 Pay 2" },
    { id: "1buy1free", label: "Buy 1 Get 1 Free" },
    { id: "2buy1free", label: "Buy 2 Get 1 Free" },
    { id: "20off", label: "20% Off" },
    { id: "30off", label: "30% Off" },
  ];

  return (
    <Box>
      <Typography variant="subtitle1">Select items to apply offer:</Typography>
      <FormGroup>
        {cart.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                checked={!!selectedItems[item.id]}
                onChange={(e) => handleCheckboxChange(e, item.id)}
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup>
      <Typography variant="subtitle1" mt={2}>
        Select offer to apply:
      </Typography>
      <FormGroup>
        {offers.map((offer) => (
          <FormControlLabel
            key={offer.id}
            control={<Checkbox onChange={() => handleOfferApply(offer.id)} />}
            label={offer.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default OfferSelector;
