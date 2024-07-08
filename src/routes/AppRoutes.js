import LoginPage from "../Pages/Login/LoginPage.js";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.js";
import NotFound from "../Pages/NotFound/NotFound.js";
import PricePage from "../Pages/Dashboard/PricePage/PricePage.js";
import TranslationPage from "../Pages/Dashboard/TranslationPage/TranslationPage.js";
import { CartProvider } from "../hooks/Context/CartContext.js";
function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="price-page" element={<PricePage />}></Route>
        <Route path="translation-page" element={<TranslationPage />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default AppRoutes;
