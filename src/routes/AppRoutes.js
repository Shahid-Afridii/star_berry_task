import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
      <Route path="/property/:id" element={isAuthenticated ? <PropertyDetails /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
