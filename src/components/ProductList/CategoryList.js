import React from "react";
import { Grid, Button } from "@mui/material";

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item key={index}>
          <Button
            variant={
              selectedCategory === category.name ? "contained" : "outlined"
            }
            color="primary"
            onClick={() => onCategorySelect(category.name)}
            style={{ marginRight: 10 }}>
            {category.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
