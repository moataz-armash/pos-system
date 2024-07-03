import React, { useState } from "react";
import { Grid, Button, Paper, TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useCart } from "../../hooks/Context/CartContext";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "1.2rem",
  padding: theme.spacing(1.5),
}));

const NumberPad = () => {
  const { t } = useTranslation();
  const { onQuantityChange, display, setDisplay } = useCart();

  const theme = useTheme();
  const green = theme.palette.green.main;

  const handleNumberClick = (num) => {
    let newDisplay;
    if (display === "0" || display === "1") {
      newDisplay = num.toString();
    } else {
      newDisplay = display + num.toString();
    }
    setDisplay(newDisplay);
    onQuantityChange(parseInt(newDisplay, 10));
  };

  const handleClear = () => {
    setDisplay("1");
    onQuantityChange(1);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
      onQuantityChange(parseInt(newDisplay, 10));
    } else {
      setDisplay("1");
      onQuantityChange(1);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setDisplay(value === "" ? "1" : value);
      onQuantityChange(parseInt(value || "1", 10));
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, marginTop: 3 }}>
      <Box mb={2}>
        <TextField
          variant="outlined"
          color="green"
          sx={{
            width: "100%",
            "& fieldset": {
              borderColor: green,
            },
          }}
          fullWidth
          label={t("enterTheQuantityOfProduct")}
          value={display}
          onChange={handleChange}
          inputProps={{ style: { fontSize: "1.5rem", textAlign: "right" } }}
        />
      </Box>
      <Grid container spacing={1}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <Grid item xs={4} key={num}>
            <StyledButton
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#35a7ad",
                "&:hover": { backgroundColor: "#2c8a8f" },
              }}
              onClick={() => handleNumberClick(num)}>
              {num}
            </StyledButton>
          </Grid>
        ))}
        <Grid item xs={4}>
          <StyledButton
            fullWidth
            variant="contained"
            color="error"
            onClick={handleClear}>
            C
          </StyledButton>
        </Grid>
        <Grid item xs={4}>
          <StyledButton
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#35a7ad",
              "&:hover": { backgroundColor: "#2c8a8f" },
            }}
            onClick={() => handleNumberClick(0)}>
            0
          </StyledButton>
        </Grid>
        <Grid item xs={4}>
          <StyledButton
            fullWidth
            variant="contained"
            color="error"
            onClick={handleBackspace}>
            ←
          </StyledButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NumberPad;
