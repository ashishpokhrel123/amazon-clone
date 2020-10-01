import React from 'react'
import './header.css';
import SearchIcon from "@material-ui/icons/Search";
import logo from '../assets/logo5.jpg';

import {Link} from 'react-router-dom';

export default function Header() {
    return (
      <nav className="header">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonclone"
        />
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchicon" />
        </div>

        <div className="header_Nav">
          <Link to="/" className="header_links">
            <div className="header_options">
              <span className="header_optionsOne">Hello</span>
              <span className="header_optionsTwo">SignIn</span>
            </div>
          </Link>

          <Link to="/" className="header_links">
            <div className="header_options">
              <span className="header_optionsOne">Returns</span>
              <span className="header_optionsTwo"> & Orders</span>
            </div>
          </Link>

          <Link to="/" className="header_links">
            <div className="header_options">
              <span className="header_optionsOne">Your</span>
              <span className="header_optionsTwo">cart</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}
