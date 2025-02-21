import { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import CartList from "../../__atoms/CartList/CartList";
import profilPhoto from "../../../assets/images/profilPhoto.png";
import icone from "../../../assets/images/iconecal.png";

function Header({ cart, setCart }) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col justify-between items-stretch max-lg:mt-3 p-2">
      <div className="flex justify-between items-center pb-7 ml-auto mr-auto max-w-[1210px] w-full relative">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "X" : "☰"}
          </button>

          <img src={logo} alt="Logo" className="w-[120px] lg:hidden" />
        </div>

        <nav className=" hidden lg:flex ml-[-550px] max-lo:ml-[-30%]">
          <ul className="flex justify-between items-start w-[500px] cursor-pointer">
            <img src={logo} alt="Logo" className="w-[120px] max-lg:hidden" />
            <li className=" text-[#69707D] font-light">Collections</li>
            <li className=" text-[#69707D] font-light">Men</li>
            <li className=" text-[#69707D] font-light">Women</li>
            <li className=" text-[#69707D] font-light">About</li>
            <li className=" text-[#69707D] font-light">Contact</li>
          </ul>
        </nav>

        <div className="flex items-center justify-between w-[150px]">
          <button
            onClick={() => setIsCartVisible(!isCartVisible)}
            className="relative px-4 py-2 rounded-md cursor-pointer"
          >
            <img src={icone} alt="Cart Icon" className="w-[25px] h-[25px]" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
          <img src={profilPhoto} alt="Profile" className="w-[50px] h-[50px] cursor-pointer" />
        </div>

        <div
          className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <button
            className="absolute top-5 right-5 text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          <ul className="flex flex-col mt-20 space-y-4 text-lg px-6 absolute z-40">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {isCartVisible && (
          <div className="absolute right-10 top-16 mt-7 w-[360px] h-[256px] overflow-y-auto flex flex-col justify-center items-center bg-white shadow-lg p-4 rounded-md transition-all duration-300 max-sm:">
            <CartList cart={cart} onRemove={removeFromCart} />
          </div>
        )}
      </div>

      <div className="bg-black w-screen h-[1px]"></div>
    </div>
  );
}

export default Header;
