import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import GreenButton from "../Button/GreenButton";

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={0}
      sx={{
        justifyContent: { xs: "center", sm: "left", md: "left", lg: "left" },
      }}>
      {categories.map((category, index) => (
        <Grid item key={index}>
          <GreenButton
            size="lg"
            variant={
              selectedCategory === category.name ? "contained" : "outlined"
            }
            onClick={() => onCategorySelect(category.name)}
            style={{
              marginRight: 5,
            }}>
            {category.name}
          </GreenButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
