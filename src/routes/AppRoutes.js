import LoginPage from "../Pages/Login/LoginPage.js";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.js";
import NotFound from "../Pages/NotFound/NotFound.js";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
