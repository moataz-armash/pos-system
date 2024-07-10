// ProductCard.jsx
import React from "react";
import { Box, Typography, IconButton, Tooltip, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled } from "@mui/material/styles";
import AddToCartButton from "../Button/AddToCartButton";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: 15,
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onCopyBarcode,
  onAddToCart,
}) => (
  <StyledPaper>
    <Box display="flex" justifyContent="flex-end">
      <IconButton onClick={() => onToggleFavorite(product.id)} size="small">
        {isFavorite ? <StarIcon color="green" /> : <StarBorderIcon />}
      </IconButton>
    </Box>
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        marginBottom: 10,
      }}
    />
    <Typography variant="subtitle1" gutterBottom>
      {product.name}
    </Typography>
    <Typography variant="h6" color="green.secondary" gutterBottom>
      ${product.price.toFixed(2)}
    </Typography>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom={1}>
      <Typography
        variant="caption"
        color="textSecondary"
        style={{ marginRight: "5px" }}>
        Barcode: {product.barcode}
      </Typography>
      <Tooltip title="Copy barcode">
        <IconButton size="small" onClick={() => onCopyBarcode(product.barcode)}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
    <AddToCartButton product={product} addToCart={() => onAddToCart(product)} />
  </StyledPaper>
);

export default ProductCard;
