import React from "react";
import cart2 from "../resources/cart.png";
import { Link } from "react-router-dom";

const Header = ({ cartContent }: { cartContent: number }) => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="topLeftHeader">Gundam Style</h1>
      </Link>
      <ul className="rightSideHeader">
        <li className="headerLink">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="headerLink">
          <Link to="/checkout">
            {cartContent > 0 ? (
              <span className="itemsInCart">{cartContent} </span>
            ) : null}

            <img src={cart2} alt="cart" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
