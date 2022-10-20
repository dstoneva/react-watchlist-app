import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar-container">
      <ul className="nav-links">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/">Watchlist</Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
