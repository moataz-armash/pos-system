import LoginPage from "../Pages/Login/LoginPage.js";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.js";
import NotFound from "../Pages/NotFound/NotFound.js";
import PricePage from "../Pages/Dashboard/PricePage/PricePage.js";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="price-page" element={<PricePage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
