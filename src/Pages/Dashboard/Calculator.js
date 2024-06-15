import React, { useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";

const Calculator = () => {
  const [display, setDisplay] = useState("0"); // State for the calculator display
  const [expression, setExpression] = useState(""); // State to store the expression to evaluate

  const handleButtonClick = (value) => {
    if (value === "=") {
      evaluateExpression();
    } else if (value === "C") {
      clearDisplay();
    } else {
      updateDisplay(value);
    }
  };

  const updateDisplay = (value) => {
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? value : prevDisplay + value
    );
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      // eslint-disable-next-line
      const result = eval(expression); // Evaluate the expression
      setDisplay(result.toString()); // Update display with result
      setExpression(result.toString()); // Update expression for further calculations
    } catch (error) {
      setDisplay("Error"); // Handle evaluation errors
      setExpression("");
    }
  };

  const clearDisplay = () => {
    setDisplay("0"); // Reset display to '0'
    setExpression(""); // Reset expression
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 2, textAlign: "right" }}>
          <Typography variant="h5">{display}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((item) => (
            <Grid key={item} item xs={3}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleButtonClick(item)}>
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
