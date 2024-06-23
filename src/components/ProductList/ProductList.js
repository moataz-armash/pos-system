// import React, { useState, useEffect, useContext } from "react";
// import { Container, Grid, Paper, Pagination } from "@mui/material";
// import { fetchProducts } from "../../api";
// import CartContext from "../../hooks/Context/CartContext";
// import ProductSearch from "./ProductSearch";
// import ProductGrid from "./ProductGrid";
// import Cart from "./Cart";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 8;

//   const {
//     cart,
//     discount,
//     selectedProducts,
//     handleAddToCart,
//     handleRemoveFromCart,
//     handleQuantityChange,
//     handleClearCart,
//     handleToggleProduct,
//     applyBuy3Pay2,
//     subtotal,
//     totalAmount,
//   } = useContext(CartContext);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     getProducts();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleIncrement = (product) => {
//     const updatedQuantity = product.quantity + 1;
//     handleQuantityChange(product, updatedQuantity);
//   };

//   const handleDecrement = (product) => {
//     const updatedQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
//     handleQuantityChange(product, updatedQuantity);
//   };

//   const filteredProducts = products
//     .filter((product) => {
//       const matchesSearch = product.barcode.includes(searchQuery);
//       return (
//         (selectedCategory === "all" ||
//           product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
//         matchesSearch
//       );
//     })
//     .slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   return (
//     <Container maxWidth="lg" style={{ marginTop: 20 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={8}>
//           <Paper elevation={3} style={{ padding: 20 }}>
//             <ProductSearch
//               searchQuery={searchQuery}
//               handleSearchChange={handleSearchChange}
//               selectedCategory={selectedCategory}
//               handleCategoryChange={handleCategoryChange}
//             />
//             <ProductGrid
//               products={filteredProducts}
//               handleAddToCart={handleAddToCart}
//             />
//             <Pagination
//               count={Math.ceil(products.length / itemsPerPage)}
//               page={page}
//               onChange={handleChangePage}
//               style={{
//                 marginTop: 20,
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             />
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Cart
//             cart={cart}
//             selectedProducts={selectedProducts}
//             handleDecrement={handleDecrement}
//             handleIncrement={handleIncrement}
//             handleRemoveFromCart={handleRemoveFromCart}
//             handleToggleProduct={handleToggleProduct}
//             subtotal={subtotal}
//             totalAmount={totalAmount}
//             applyBuy3Pay2={applyBuy3Pay2}
//             handleClearCart={handleClearCart}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProductList;

// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import ProductCard from "./ProductCard";

// const ProductList = ({ products, noMatchingProducts, searchQuery }) => (
//   <>
//     {noMatchingProducts && searchQuery && (
//       <Typography variant="h6" color="error">
//         There is no product like this!
//       </Typography>
//     )}
//     <Grid container spacing={2} style={{ marginTop: 10 }}>
//       {products.map((product, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//           <ProductCard product={product} />
//         </Grid>
//       ))}
//     </Grid>
//   </>
// );

// export default ProductList;

import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useCart } from "../../hooks/Context/CartContext";
import GreenButton from "../Button/GreenButton";
import AddToCartButton from "../Button/AddToCartButton";

const ProductList = ({ products, searchQuery, selectedSubcategory }) => {
  const { addToCart, removeFromCart, updateQuantity, getQuantity } = useCart();
  const noMatchingProducts = products.length === 0 && searchQuery;

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {/* To display filtered Products filtered by search bar  */}
        {searchQuery &&
          products.map((product, index) => (
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
                  getQuantity={getQuantity}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                />
              </Paper>
            </Grid>
          ))}
        {/* To display products when choose subcategory  */}
        {selectedSubcategory &&
          !searchQuery &&
          products.map((product, index) => (
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
                  getQuantity={getQuantity}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                />
              </Paper>
            </Grid>
          ))}
      </Grid>
      {noMatchingProducts && (
        <Typography variant="h6" color="error">
          There is no product like this!
        </Typography>
      )}
    </>
  );
};

export default ProductList;
