import React, { useState, useEffect } from "react";
import BarcodeScanner from "./BarcodeScanner";
import { fetchProducts } from "../../../api";
import Dashboard from "../Dashboard";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
  CircularProgress,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import MuiAlert from "@mui/material/Alert";
import {
  CameraAlt as CameraIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useCart } from "../../../hooks/Context/CartContext";
import CartButton from "../../../components/Cart/CartButton";
import CartDrawer from "../../../components/Cart/CartDrawer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  overflowY: "auto",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 1),
}));

const ProductCard = styled(Card)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
}));

const ProductDetails = styled(CardContent)(({ theme }) => ({
  flex: "1 0 auto",
}));

const PricePage = () => {
  const { t } = useTranslation();
  const {
    addToCart,
    cart,
    updateQuantity,
    quantity,
    setQuantity,
    setDisplay,
    handleCartClick,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);
  const [manualBarcode, setManualBarcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastScannedBarcode, setLastScannedBarcode] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setCategories(data);
        // Find the "Products" category and set its products
        const productsCategory = data.find(
          (category) => category.name === "Products"
        );
        if (productsCategory && productsCategory.products) {
          setProducts(productsCategory.products);
        }
        if (data.length > 0) {
          setSelectedCategory(data[0].name);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleStartScanning = () => {
    setScanning(true);
    setErrorMessage("");
    setLastScannedBarcode("");
  };

  const handleScan = (barcode) => {
    setLastScannedBarcode(barcode);
    findProduct(barcode);
  };

  const handleCloseScanner = () => {
    setScanning(false);
  };

  const handleManualInput = () => {
    setLastScannedBarcode(manualBarcode);
    findProduct(manualBarcode);
    setManualBarcode("");
  };

  const findProduct = (barcode) => {
    const product = products.find((p) => p.barcode === barcode);

    if (product) {
      setScannedProduct(product);
      setErrorMessage("");
      setScanning(false); // Close scanner when product is found

      // Check if the product is already in the cart
      const cartItem = cart.find((item) => item.id === product.id);
      const cartQuantity = cartItem ? cartItem.quantity : 0;

      // Add the product to the cart or update its quantity
      if (cartQuantity === 0) {
        addToCart({ ...product, quantity: quantity });
      } else {
        updateQuantity(product.id, cartQuantity + quantity);
      }

      // Show success message
      showSnackbar(`Added ${quantity} of ${product.name} to cart`);
      setQuantity(1);
      setDisplay("1");
    } else {
      setScannedProduct(null);
      setErrorMessage(`${t("productWithBarcode")} ${barcode} ${t("notFound")}`);
      // Don't close scanner if product is not found
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={3}>
          <Dashboard dashboard="dashboard" />
        </Grid>
        <Grid item xs={12} md={9}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom>
              {t("pricePage")}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                label={t("enterBarcode")}
                variant="outlined"
                value={manualBarcode}
                onChange={(e) => setManualBarcode(e.target.value)}
                size="small"
              />
              <StyledButton
                variant="contained"
                color="green"
                sx={{ color: "white" }}
                startIcon={<SearchIcon />}
                onClick={handleManualInput}>
                {t("search")}
              </StyledButton>
              <StyledButton
                variant="contained"
                color="info"
                startIcon={<CameraIcon />}
                onClick={handleStartScanning}>
                {t("scanProduct")}
              </StyledButton>
              <CartButton onClick={handleCartClick} />
            </Box>

            {scanning && (
              <Box mt={2}>
                <BarcodeScanner
                  onScan={handleScan}
                  onClose={handleCloseScanner}
                />
                <TextField
                  label={t("quantity")}
                  type="number"
                  color="green"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  inputProps={{ min: 1 }}
                  sx={{ mb: 2 }}
                />
              </Box>
            )}

            {lastScannedBarcode && (
              <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
                {t("LastScannedBarcode")}: {lastScannedBarcode}
              </Alert>
            )}

            {errorMessage && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Alert>
            )}

            {scannedProduct && (
              <ProductCard>
                <CardMedia
                  component="img"
                  sx={{ width: 151, ml: 2 }}
                  image={scannedProduct.image}
                  alt={scannedProduct.name}
                />
                <ProductDetails>
                  <Typography component="h5" variant="h4">
                    {scannedProduct.name}
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    {t("price")}: ${scannedProduct.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Barcode: {scannedProduct.barcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {scannedProduct.id}
                  </Typography>
                </ProductDetails>
              </ProductCard>
            )}
          </StyledPaper>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <MuiAlert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: "100%" }}>
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Grid>
        <Grid item xs={12} md={4}>
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricePage;
