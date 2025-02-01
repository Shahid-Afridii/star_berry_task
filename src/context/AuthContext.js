import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Login function
  const login = (username, password) => {
    if (username === "admin" && password === "Welcome@123") {
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  // Provide the context value
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Default export the AuthContext
export default AuthContext;
