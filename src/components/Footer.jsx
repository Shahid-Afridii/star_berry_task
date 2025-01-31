// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} shahid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
