import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ProductSearch = ({
  searchQuery,
  handleSearchChange,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          label="Search by Barcode"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="vegetables">Vegetables</MenuItem>
            <MenuItem value="fruits">Fruits</MenuItem>
            <MenuItem value="Dairy">Dairy</MenuItem>
            <MenuItem value="Bakery">Bakery</MenuItem>
            <MenuItem value="Seafood">Seafood</MenuItem>
            <MenuItem value="Pantry">Pantry</MenuItem>
            <MenuItem value="Meat">Meat</MenuItem>
            <MenuItem value="Frozen">Frozen</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ProductSearch;
