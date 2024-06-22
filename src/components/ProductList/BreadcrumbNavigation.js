import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BreadcrumbNavigation = ({
  selectedCategory,
  selectedSubcategory,
  onBack,
  onCategorySelect,
  onSubcategorySelect,
}) => {
  return (
    <Grid container spacing={2} alignItems="center">
      {selectedCategory && (
        <Grid item>
          {selectedSubcategory && (
            <IconButton onClick={onBack}>
              <ArrowBackIcon />
            </IconButton>
          )}
        </Grid>
      )}
      <Grid item>
        {selectedCategory && selectedSubcategory && (
          <Typography variant="h6" component="span">
            <span
              onClick={() => onCategorySelect(selectedCategory)}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                marginRight: 5,
              }}>
              {selectedCategory}
            </span>
            {" > "}
            <span
              onClick={() => onSubcategorySelect("")}
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
  );
};

export default BreadcrumbNavigation;
