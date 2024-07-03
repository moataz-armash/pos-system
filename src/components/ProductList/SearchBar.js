import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <Grid container spacing={2} mb={2} alignItems="center">
      <Grid item xs={10}>
        <TextField
          variant="outlined"
          color="green"
          sx={{
            width: "100%",
            "& fieldset": {
              borderColor: green,
            },
          }}
          label={t("searchByBarcode")}
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
