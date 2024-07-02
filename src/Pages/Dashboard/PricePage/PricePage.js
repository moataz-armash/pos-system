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
} from "@mui/material";
import { styled } from "@mui/system";
import {
  CameraAlt as CameraIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
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
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);
  const [manualBarcode, setManualBarcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastScannedBarcode, setLastScannedBarcode] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setCategories(data);
        const products = flattenProducts(data);
        setAllProducts(products);
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

  const flattenProducts = (data) => {
    return data.flatMap((category) =>
      category.subcategories.flatMap((subcategory) =>
        subcategory.products
          ? subcategory.products.map((product) => ({
              ...product,
              category: category.name,
              subcategory: subcategory.name,
            }))
          : []
      )
    );
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
    let barcodeString = barcode.toString();

    const searchProduct = (code) => {
      const paddedBarcode = code.padStart(12, "0");
      return allProducts.find((p) => p.barcode === paddedBarcode);
    };

    let product;

    if (barcodeString.length === 12) {
      // First try with all 12 digits
      product = searchProduct(barcodeString);

      if (!product) {
        barcodeString = barcodeString.slice(0, -1);
        product = searchProduct(barcodeString);
      }
    } else if (barcodeString.length === 11) {
      // For 11 digits, search directly
      product = searchProduct(barcodeString);
    }

    if (product) {
      setScannedProduct(product);
      setErrorMessage("");
      setScanning(false); // Close scanner when product is found
    } else {
      setScannedProduct(null);
      setErrorMessage(`Product with barcode ${barcodeString} not found`);
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
              Price Page
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                label="Enter Barcode"
                variant="outlined"
                color="green"
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
                Search
              </StyledButton>
              <StyledButton
                variant="contained"
                color="info"
                startIcon={<CameraIcon />}
                onClick={handleStartScanning}>
                Scan Product
              </StyledButton>
            </Box>

            {scanning && (
              <Box mt={2}>
                <BarcodeScanner
                  onScan={handleScan}
                  onClose={handleCloseScanner}
                />
              </Box>
            )}

            {lastScannedBarcode && (
              <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
                Last scanned barcode: {lastScannedBarcode}
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
                    Price: ${scannedProduct.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Barcode: {scannedProduct.barcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subcategory: {scannedProduct.subcategory}
                  </Typography>
                </ProductDetails>
              </ProductCard>
            )}
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricePage;
