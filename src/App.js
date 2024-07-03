import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LanguageProvider } from "../src/hooks/Context/LanguageProvider";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ThemeToggle";
import { useThemeMode } from "../src/hooks/Context/useThemeMode";
import "./i18n";
import "./App.css";

function App() {
  const { theme, toggleColorMode } = useThemeMode();

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
        <ThemeToggle toggleColorMode={toggleColorMode} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
