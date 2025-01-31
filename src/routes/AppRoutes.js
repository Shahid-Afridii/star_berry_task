import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";
import Layout from "../components/Layout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/property" />} />

      {/* Protected Routes with Layout */}
      <Route
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/property" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Route>

      {/* Fallback for undefined routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
