import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-container">
          <div className="brand">
            <Link to="/">Watchlist</Link>
            <ul className="nav-links">
              <li>
                <Link to="/">Watchlist</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
