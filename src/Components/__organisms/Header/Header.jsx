import { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import CartList from "../../__atoms/CartList/CartList";

function Header({ cart, setCart }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col justify-between items-stretch">
      <div className="flex justify-between items-center pb-7 ml-auto mr-auto max-w-[1210px] w-full">
        <nav>
          <ul className="flex justify-between w-[500px]">
            <img src={logo} alt="Logo" />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <button
          onClick={() => setIsCartVisible(!isCartVisible)}
          className="relative bg-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-gray-300"
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>

        {isCartVisible && (
          <div className="absolute right-10 top-16 mt-7 w-[360px] h-[256px] overflow-y-auto flex flex-col justify-center items-center bg-white shadow-lg p-4 rounded-md transition-all duration-300">
            <CartList cart={cart} onRemove={removeFromCart} />
          </div>
        )}
      </div>

      <div className="bg-black w-screen h-[1px]"></div>
    </div>
  );
}

export default Header;
