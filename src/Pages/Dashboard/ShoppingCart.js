import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const categories = [
  {
    name: "Categories",
    subcategories: [
      { name: "Market", image: "https://via.placeholder.com/150" },
      { name: "House Cleaning", image: "https://via.placeholder.com/150" },
      {
        name: "Home & Kitchen Supplies",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Clothing Accessories",
        image: "https://via.placeholder.com/150",
      },
      { name: "Home & Life", image: "https://via.placeholder.com/150" },
      { name: "Book & Stationery", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      { name: "Smartphones", image: "https://via.placeholder.com/150" },
      { name: "Laptops", image: "https://via.placeholder.com/150" },
      { name: "Tablets", image: "https://via.placeholder.com/150" },
      { name: "TVs & Entertainment", image: "https://via.placeholder.com/150" },
      { name: "Smart Home", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    name: "Health & Beauty",
    subcategories: [
      { name: "Skincare", image: "https://via.placeholder.com/150" },
      { name: "Hair Care", image: "https://via.placeholder.com/150" },
      { name: "Makeup", image: "https://via.placeholder.com/150" },
      { name: "Personal Care", image: "https://via.placeholder.com/150" },
      { name: "Health & Wellness", image: "https://via.placeholder.com/150" },
    ],
  },
];

// Dummy product data for demonstration
const dummyProducts = [
  { name: "Product A", price: 1.99 },
  { name: "Product B", price: 2.49 },
  { name: "Product C", price: 3.99 },
];

// Function to generate dummy products for subcategories
const generateDummyProducts = () => {
  const products = {};
  categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      products[subcategory.name] = dummyProducts.map((product) => ({
        ...product,
        category: category.name,
        subcategory: subcategory.name,
      }));
    });
  });
  return products;
};

const GroceryMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [products, setProducts] = useState(generateDummyProducts());

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(""); // Reset subcategory when category changes
  };

  const handleSubcategorySelect = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
              Grocery Market
            </Typography>
            <Grid container spacing={2}>
              {categories.map((category, index) => (
                <Grid item key={index}>
                  <Button
                    variant={
                      selectedCategory === category.name
                        ? "contained"
                        : "outlined"
                    }
                    color="primary"
                    onClick={() => handleCategorySelect(category.name)}
                    style={{ marginRight: 10 }}>
                    {category.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
            {selectedCategory && (
              <Grid container spacing={2} style={{ marginTop: 10 }}>
                {categories
                  .find((cat) => cat.name === selectedCategory)
                  ?.subcategories.map((subcat, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3}>
                      <Card
                        onClick={() => handleSubcategorySelect(subcat.name)}
                        sx={{ cursor: "pointer" }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={subcat.image}
                          alt={subcat.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {subcat.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Products in{" "}
              {selectedSubcategory ? selectedSubcategory : selectedCategory}
            </Typography>
            {selectedSubcategory && (
              <Grid container spacing={2}>
                {products[selectedSubcategory]?.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Paper style={{ padding: 10, textAlign: "center" }}>
                      <Typography variant="subtitle1">
                        {product.name}
                      </Typography>
                      <Typography variant="body2">
                        ${product.price.toFixed(2)}
                      </Typography>
                      <Button variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GroceryMarket;
