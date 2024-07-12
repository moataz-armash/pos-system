import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LanguageProvider } from "../src/hooks/Context/LanguageProvider";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ThemeToggle";
import { useThemeMode } from "../src/hooks/Context/useThemeMode";
import "./i18n";
import "./App.css";
import { CartProvider, useCart } from "./hooks/Context/CartContext";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const AlertSnackbar = () => {
  const { snackbarOpen, snackbarMessage, handleSnackbarClose } = useCart();

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={2000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <MuiAlert
        onClose={handleSnackbarClose}
        severity="success"
        sx={{ width: "100%" }}>
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  );
};

function App() {
  const { theme, toggleColorMode } = useThemeMode();

  return (
    <CartProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
          <ThemeToggle toggleColorMode={toggleColorMode} />
        </ThemeProvider>
      </LanguageProvider>
      <AlertSnackbar />
    </CartProvider>
  );
}

export default App;
