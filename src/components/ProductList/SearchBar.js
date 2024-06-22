import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <Grid container spacing={2} mb={2} alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="Search by Barcode"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={onSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
