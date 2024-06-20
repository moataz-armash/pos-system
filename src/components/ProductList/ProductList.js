import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Paper, Pagination } from "@mui/material";
import { fetchProducts } from "../../api";
import CartContext from "../../hooks/Context/CartContext";
import ProductSearch from "./ProductSearch";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const {
    cart,
    discount,
    selectedProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleQuantityChange,
    handleClearCart,
    handleToggleProduct,
    applyBuy3Pay2,
    subtotal,
    totalAmount,
  } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleIncrement = (product) => {
    const updatedQuantity = product.quantity + 1;
    handleQuantityChange(product, updatedQuantity);
  };

  const handleDecrement = (product) => {
    const updatedQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
    handleQuantityChange(product, updatedQuantity);
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.barcode.includes(searchQuery);
      return (
        (selectedCategory === "all" ||
          product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        matchesSearch
      );
    })
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <ProductSearch
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />
            <ProductGrid
              products={filteredProducts}
              handleAddToCart={handleAddToCart}
            />
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Cart
            cart={cart}
            selectedProducts={selectedProducts}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleRemoveFromCart={handleRemoveFromCart}
            handleToggleProduct={handleToggleProduct}
            subtotal={subtotal}
            totalAmount={totalAmount}
            applyBuy3Pay2={applyBuy3Pay2}
            handleClearCart={handleClearCart}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
