import React from 'react'
import './header.css';
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import usa from '../assets/usa.png';


import {Link} from 'react-router-dom';
import { useStateValue } from "../StateProvider";

export default function Header() {

  const [{ basket }] = useStateValue();
    return (
      <nav className="header">
        <MenuIcon className="header_menuIcon" />
        <Link to ="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonclone"
        />
        </Link>
        <div className="header_search">
          <select className="header_selectcategory">
            <option>All</option>
            <option>Colthings</option>
            <option>Accessories</option>
            <option>laptop</option>
          </select>
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchicon" />
        </div>

        <div className="header_Nav">
          <Link to="/" className="header_links">
            <div className="header_options">
              
              <span className="header_optionsTwo"><select className="header_lanague">
                <option className="header_languageoptions">En</option></select></span>
             
            </div>
          </Link>
          <Link to="/login" className="header_links">
            <div className="header_options">
              <span className="header_optionsOne">Hello, SignIn</span>
              <span className="header_optionsTwo">Accounts & Lists</span>
            </div>
          </Link>

          <Link to="/" className="header_links">
            <div className="header_options">
              <span className="header_optionsOne">Returns</span>
              <span className="header_optionsTwo"> & Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className="header_links">
            <div className="header_options">
    <span className="header_optionsOne">
                {basket?.length}
      </span>
              <span className="header_optionsTwo"><AddShoppingCartIcon className="header_carticon" />cart</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}
