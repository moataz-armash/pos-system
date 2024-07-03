import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./muiTheme.js";
import { LanguageProvider } from "../src/hooks/Context/LanguageProvider.js";
const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        {/* Header */}
        <AppRoutes />
        {/* Footer */}
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
