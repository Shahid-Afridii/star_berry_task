import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#ff4d4f" }}>
        404
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#6c757d" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/home"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
