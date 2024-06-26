import React, { useState } from "react";
import { Grid, Paper, Typography, Button, Pagination } from "@mui/material";
import { useCart } from "../../hooks/Context/CartContext";
import { styled } from "@mui/material/styles";
import AddToCartButton from "../Button/AddToCartButton";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#014d50",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#02747a", // Darker shade for the selected item
    color: "#fff",
  },
  "& .MuiPaginationItem-root:hover": {
    backgroundColor: "#02747a",
    color: "white",
  },
}));

const ProductList = ({
  products,
  searchQuery,
  selectedSubcategory,
  onProductSelect,
}) => {
  const { addToCart, quantity, setQuantity } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const noMatchingProducts = products.length === 0 && searchQuery;

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantity });
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Calculate the products to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {/* To display filtered Products filtered by search bar  */}
        {searchQuery &&
          currentProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: 10,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                />
                <Typography variant="subtitle1">{product.name}</Typography>
                <Typography variant="body2">
                  ${product.price.toFixed(2)}
                </Typography>
                <AddToCartButton
                  key={product.id}
                  product={product}
                  addToCart={() => handleAddToCart(product)}
                />
              </Paper>
            </Grid>
          ))}
        {/* To display products when choose subcategory  */}
        {selectedSubcategory &&
          !searchQuery &&
          currentProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: 10,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                />
                <Typography variant="subtitle1">{product.name}</Typography>
                <Typography variant="body2">
                  ${product.price.toFixed(2)}
                </Typography>
                <AddToCartButton
                  key={product.id}
                  product={product}
                  addToCart={() => handleAddToCart(product)}
                />
              </Paper>
            </Grid>
          ))}
        {selectedSubcategory && (
          <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <StyledPagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Grid>
        )}
      </Grid>
      {noMatchingProducts && (
        <Typography variant="h6" color="error">
          There is no product like this!
        </Typography>
      )}
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        {searchQuery && (
          <StyledPagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        )}
      </Grid>
    </>
  );
};

export default ProductList;
