import LoginPage from "../Pages/Login/LoginPage.js";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.js";
import NotFound from "../Pages/NotFound/NotFound.js";
import PricePage from "../Pages/Dashboard/PricePage/PricePage.js";
import TranslationPage from "../Pages/Dashboard/TranslationPage/TranslationPage.js";
import PrinterTest from "../Pages/Dashboard/PrinterTest/PrinterTest.js";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="price-page" element={<PricePage />}></Route>
      <Route path="translation-page" element={<TranslationPage />}></Route>
      <Route path="printer-test" element={<PrinterTest />}></Route>
    </Routes>
  );
}

export default AppRoutes;
