import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#ff4081",
      },
      green: {
        main: "#029199",
        secondary: "#02747a",
      },
      lightGreen: {
        main: "#02747a",
        secondary: "#01575c",
      },
      lightBlue: {
        main: "#67bdc2",
      },
      // Add these lines to ensure proper text color in dark mode
      text: {
        primary: mode === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
        secondary:
          mode === "light" ? "rgba(0, 0, 0, 0.54)" : "rgba(255, 255, 255, 0.7)",
      },
      background: {
        default: mode === "light" ? "#fff" : "#121212",
        paper: mode === "light" ? "#fff" : "#1e1e1e",
      },
    },
  });
