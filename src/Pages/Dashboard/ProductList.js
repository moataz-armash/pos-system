import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Pagination,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchProducts } from "../../api";

const TAX_RATE = 0.1; // 10% tax

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [buy3Pay2AppliedProducts, setBuy3Pay2AppliedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

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

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      const updatedSelected = selectedProducts.filter(
        (item) => item !== product.id
      );
      const updatedApplied = buy3Pay2AppliedProducts.filter(
        (item) => item !== product.id
      );
      setDiscount(0); // Reset discount when removing product
      setSelectedProducts(updatedSelected);
      setBuy3Pay2AppliedProducts(updatedApplied);
      return updatedCart;
    });
  };

  const handleQuantityChange = (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
    setDiscount(0);
    setSelectedProducts([]);
    setBuy3Pay2AppliedProducts([]);
  };

  const handleToggleProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((item) => item !== productId)
        : [...prevSelected, productId]
    );
  };

  const applyBuy3Pay2 = () => {
    // Check if the discount has already been applied
    if (discount > 0) {
      alert("Buy 3 Pay 2 discount has already been applied.");
      return;
    }

    const productQuantityMap = new Map();
    cart.forEach((product) => {
      const currentQuantity = productQuantityMap.get(product.id) || 0;
      productQuantityMap.set(product.id, currentQuantity + product.quantity);
    });

    let totalDiscount = 0;

    const updatedCart = cart.map((product) => {
      const currentQuantity = productQuantityMap.get(product.id) || 0;
      const freeItems = Math.floor(currentQuantity / 3); // Calculate free items
      const discountAmount = freeItems * product.price; // Calculate discount amount

      if (
        selectedProducts.includes(product.id) && // Apply only for selected products
        freeItems > 0 &&
        currentQuantity >= 3
      ) {
        totalDiscount += discountAmount;
      }

      return product;
    });

    setDiscount(totalDiscount);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalAmount = subtotal + subtotal * TAX_RATE - discount;

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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="Search by Barcode"
                  variant="outlined"
                  fullWidth
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    label="Category">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="vegetables">Vegetables</MenuItem>
                    <MenuItem value="fruits">Fruits</MenuItem>
                    <MenuItem value="Dairy">Dairy</MenuItem>
                    <MenuItem value="Bakery">Bakery</MenuItem>
                    <MenuItem value="Seafood">Seafood</MenuItem>
                    <MenuItem value="Pantry">Pantry</MenuItem>
                    <MenuItem value="Meat">Meat</MenuItem>
                    <MenuItem value="Frozen">Frozen</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Paper
                    style={{
                      padding: 20,
                      textAlign: "center",
                      height: "100%",
                    }}>
                    <Box
                      sx={{
                        height: 150,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        marginBottom: 2,
                      }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
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
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
                <Typography variant="h6">Cart</Typography>
                {cart.length === 0 && (
                  <Typography variant="body1" style={{ marginTop: 10 }}>
                    Your cart is empty. Please add something.
                  </Typography>
                )}
                <List>
                  {cart.map((product) => (
                    <ListItem key={product.id} divider>
                      <ListItemText
                        primary={product.name}
                        secondary={`$${product.price}`}
                      />
                      <IconButton
                        aria-label="decrement"
                        onClick={() => handleDecrement(product)}>
                        <Typography variant="h6">-</Typography>
                      </IconButton>
                      <TextField
                        type="number"
                        value={product.quantity}
                        InputProps={{ readOnly: true }}
                        style={{ width: 60, textAlign: "center" }}
                      />
                      <IconButton
                        aria-label="increment"
                        onClick={() => handleIncrement(product)}>
                        <Typography variant="h6">+</Typography>
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveFromCart(product)}>
                        <DeleteIcon />
                      </IconButton>
                      <Checkbox
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleToggleProduct(product.id)}
                      />
                    </ListItem>
                  ))}
                </List>
                {cart.length > 0 && (
                  <>
                    <Typography variant="h6" style={{ padding: 10 }}>
                      Subtotal: ${subtotal.toFixed(2)}
                    </Typography>
                    <Typography variant="h6" style={{ padding: 10 }}>
                      Total Amount: ${totalAmount.toFixed(2)}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 20,
                      }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={applyBuy3Pay2}>
                        Apply Buy 3 Pay 2
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClearCart}>
                        Clear Cart
                      </Button>
                    </div>
                  </>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
