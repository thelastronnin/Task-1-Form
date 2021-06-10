import React from "react";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer-container">
      <p>Copyright &copy; 2021</p>
      {location.pathname !== "/about" && <Link to="/about">About</Link>}
    </div>
  );
};

export default Footer;
