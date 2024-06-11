import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./muiTheme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <AppRoutes />
      {/* Footer */}
    </ThemeProvider>
  );
};

export default App;
