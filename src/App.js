import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage.js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./muiTheme.js";
function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
