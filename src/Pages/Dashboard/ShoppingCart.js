import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { fetchProducts } from "../../api";
import CategoryList from "../../components/ProductList/CategoryList";
import SubcategoryList from "../../components/ProductList/SubcategoryList";
import ProductList from "../../components/ProductList/ProductList";
import SearchBar from "../../components/ProductList/SearchBar";
import BreadcrumbNavigation from "../../components/Cart/BreadcrumbNavigation";
import CartDrawer from "../../components/Cart/CartDrawer";
import CartButton from "../../components/Cart/CartButton";
import { useCart } from "../../hooks/Context/CartContext";

const ShoppingCart = () => {
  const {
    addToCart,
    quantity,
    setQuantity,
    handleCartClick,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchProducts();
        console.log("Fetched data:", fetchedData); // Log the fetched data
        setData(fetchedData);
        if (fetchedData.length > 0) {
          setSelectedCategory(fetchedData[0].name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProductSelect = (product) => {
    addToCart({ ...product, quantity: quantity || 1 });
    console.log(`Adding ${quantity || 1} of ${product.name} to cart`);
    setQuantity(1);
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory("");
    setSearchQuery("");
  };

  const handleSubcategorySelect = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory("");
    } else {
      setSelectedCategory(data[0]?.name || "");
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getCategories = () => {
    return data.filter((category) => category.name !== "All Products");
  };

  const getSubcategories = () => {
    if (!selectedCategory) return [];
    return (
      data.find((cat) => cat.name === selectedCategory)?.subcategories || []
    );
  };

  if (loading) {
    return (
      <Backdrop open={true} style={{ zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (data.length === 0) {
    return (
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Typography variant="h5">
          No data available. Please check your API connection.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Grid container>
              <Grid item xs={8} sm={10} md={10} lg={10}>
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                />
              </Grid>
              <Grid item xs={2} sm={1}>
                <CartButton onClick={handleCartClick} />
              </Grid>
            </Grid>
            <BreadcrumbNavigation
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onBack={handleBack}
              onCategorySelect={handleCategorySelect}
              onSubcategorySelect={handleSubcategorySelect}
            />
            {!selectedSubcategory && !searchQuery && (
              <CategoryList
                categories={getCategories()}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
            )}
            {selectedCategory && !searchQuery && !selectedSubcategory && (
              <SubcategoryList
                subcategories={getSubcategories()}
                onSubcategorySelect={handleSubcategorySelect}
              />
            )}
            <ProductList
              data={data}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onProductSelect={handleProductSelect}
            />
          </Paper>
        </Grid>
      </Grid>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Container>
  );
};

export default ShoppingCart;
