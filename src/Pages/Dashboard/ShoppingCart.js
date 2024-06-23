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
import BreadcrumbNavigation from "../../components/ProductList/BreadcrumbNavigation";
import { CartProvider } from "../../hooks/Context/CartContext";
import CartDrawer from "../../components/ProductList/CartDrawer";
import CartButton from "../../components/ProductList/CartButton";

const ShoppingCart = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  if (loading) {
    return (
      <Backdrop open={true} style={{ zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

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
      setSelectedCategory(categories[0]?.name || "");
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getSubcategories = () => {
    if (!selectedCategory) return [];
    return (
      categories.find((cat) => cat.name === selectedCategory)?.subcategories ||
      []
    );
  };

  const getProducts = () => {
    if (!selectedSubcategory) return [];
    const subcategory = getSubcategories().find(
      (subcat) => subcat.name === selectedSubcategory
    );
    return subcategory?.products || [];
  };

  const filteredSubProducts = getProducts().filter((product) =>
    product.barcode.includes(searchQuery)
  );

  const filteredProducts = allProducts.filter((product) =>
    product.barcode.includes(searchQuery)
  );

  if (loading) {
    return (
      <Backdrop open={true} style={{ zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Grid container>
              <Grid item xs={10}>
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                />
              </Grid>
              <Grid item>
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
            {!selectedSubcategory && (
              <CategoryList
                categories={categories}
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
              products={
                selectedSubcategory ? filteredSubProducts : filteredProducts
              }
              searchQuery={searchQuery}
              selectedSubcategory={selectedSubcategory}
            />
          </Paper>
          <Grid item xs={12} md={4}>
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
