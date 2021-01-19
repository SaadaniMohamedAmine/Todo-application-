import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Navbar = () => {
  return (
    <div className="navbarr">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/todos">
        Todos
      </Link>
      <Link className="nav-item" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
