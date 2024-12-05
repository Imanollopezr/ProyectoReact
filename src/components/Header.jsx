import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import mono from "./mono.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src={mono}
            alt="mono"
            className="logo-image"
          />
          <h1 className="logo">Caps Imperial</h1>
        </div>

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/shop">Tienda</Link>
          <Link to="/products">Gestión de Productos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
