import React from "react";
import {BsFillCartCheckFill,BsSearch} from 'react-icons/bs'
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size}) => {
  return (
    
    <nav className="gnav">
      
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <Link to="/product">
            Explore Product
          </Link>
        </span>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
        {/* <span className="my_shop" onClick={() => setShow(true)}>
          <Link to="/order">
            Order
          </Link>
        </span> */}
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <BsFillCartCheckFill/>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
