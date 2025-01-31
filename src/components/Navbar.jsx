import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <img
        src="https://cdn.prod.website-files.com/5b5affb9e054d23e31dada55/6633910c7293e0eb10956014_starberry-logo-new%203.png"
            alt="Starberry Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className={`navbar-toggler ${menuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center">
            <Link to="/" className="nav-link me-3">
              Home
            </Link>
            <Link to="/about" className="nav-link me-3">
              About
            </Link>
            <Link to="/contact" className="nav-link me-3">
              Contact
            </Link>

            {/* User Section */}
            {isAuthenticated ? (
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                  onClick={logout}
                >
                  Logout
                </button>
              
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-primary ms-2">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
