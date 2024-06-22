import { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CategorySelector = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  handleSubcategorySelect,
  handleBack,
  handleCategorySelect,
  getSubcategories,
  searchQuery,
}) => {
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {selectedCategory && (
          <Grid item>
            {selectedSubcategory && (
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            )}
          </Grid>
        )}
        <Grid item>
          {selectedCategory && selectedSubcategory && (
            <Typography variant="h6" component="span">
              <span
                onClick={() => handleCategorySelect(selectedCategory)}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginRight: 5,
                }}>
                {selectedCategory}
              </span>
              {" > "}
              <span
                onClick={() => handleSubcategorySelect("")}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}>
                {selectedSubcategory}
              </span>
            </Typography>
          )}
        </Grid>
      </Grid>
      {!selectedSubcategory && (
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item key={index}>
              <Button
                variant={
                  selectedCategory === category.name ? "contained" : "outlined"
                }
                color="primary"
                onClick={() => handleCategorySelect(category.name)}
                style={{ marginRight: 10 }}>
                {category.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
      {selectedCategory && !searchQuery && !selectedSubcategory && (
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          {getSubcategories().map((subcat, index) => (
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
    </>
  );
};
export default CategorySelector;
