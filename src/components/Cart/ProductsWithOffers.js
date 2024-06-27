import React from "react";
import { useCart } from "../../hooks/Context/CartContext";
import { List, ListItem, Typography } from "@mui/material";

const ProductsWithOffers = () => {
  const { cart } = useCart();

  const productsWithOffers = cart.filter((product) => product.offerApplied);

  return (
    <div>
      <Typography variant="h6">Products with Offers Applied</Typography>
      <List>
        {productsWithOffers.length === 0 ? (
          <Typography>No offers applied to any products.</Typography>
        ) : (
          productsWithOffers.map((product) => (
            <ListItem key={product.id}>
              <Typography>
                {product.name} - {product.offerApplied} applied, saving $
                {product.appliedDiscount.toFixed(2)}
              </Typography>
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default ProductsWithOffers;
