import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import GreenButton from "../Button/GreenButton";

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item key={index}>
          <GreenButton
            variant={
              selectedCategory === category.name ? "contained" : "outlined"
            }
            onClick={() => onCategorySelect(category.name)}
            style={{
              marginRight: 10,
            }}>
            {category.name}
          </GreenButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
