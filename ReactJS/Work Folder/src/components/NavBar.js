import React, { useContext } from "react";
import Logo from "./../images/Logo.png";
import Cart from "./../images/Cart.png";
import { MyContext } from "../App";

export default function NavBar() {
  const { cart } = useContext(MyContext);
  return (
    <nav>
      <div className="navContainer">
        <div className="NavLogo">
          <a href="/">
            <img src={Logo} className="icon" alt="Logo" />
          </a>
          <h3 className="NavTile">Online shop</h3>
        </div>
        <h3>Project XIV</h3>
      </div>
      <div className="navContainer">
        <div>
          <button>Home</button>
          <button>Store</button>
          <button>About</button>
        </div>
        <div>
          {cart && cart.length > 0 ? (
            <button className="cartButton">
              <img src={Cart} width={20}></img>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
