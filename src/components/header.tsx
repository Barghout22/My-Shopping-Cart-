import React from "react";
import cart from "../resources/trolley.png";
import { Link } from "react-router-dom";

const Header = ({ cartContent }: { cartContent: number }) => {
  return (
    <div className="header">
      <div className="leftSideHeader">
        <Link to="/">
          <div className="topLeftHeader">Gundam Style</div>
        </Link>

        {/* <div className="bottomLeftHeader">
            your one stop shop for Hobby figures
          </div> */}
      </div>
      <div className="rightSideHeader">
        <Link to="/shop">
          <div className="headerLink">shop</div>
        </Link>
        <Link to="/checkout">
          <div className="headerLink">
            <img src={cart} alt="cart" />
            {cartContent > 0 ? cartContent : null}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
