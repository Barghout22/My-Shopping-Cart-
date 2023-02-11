import React from "react";
import cart2 from "../resources/cart.png";
import { Link } from "react-router-dom";

const Header = ({ cartContent }: { cartContent: number }) => {
  return (
    <div className="header">
      <Link to="/shopping-cart/">
        <h1 className="topLeftHeader">Gundam Style</h1>
      </Link>
      <ul className="rightSideHeader">
        <li className="headerLink">
          <Link to="/shopping-cart/shop">Shop</Link>
        </li>
        <li className="headerLink">
          <Link to="/shopping-cart/checkout">
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
