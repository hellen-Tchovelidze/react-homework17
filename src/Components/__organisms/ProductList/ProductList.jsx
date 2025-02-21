import { useState, useEffect } from "react";
import Product from "../../__moleculos/Product/Product";
import ProductDiscription from "../../__moleculos/ProductDiscription/ProductDiscription";
import PriceUI from "../../__atoms/PriceUI/PriceUI";
import Header from "../Header/Header";
import Sweeper from "../Sweeper/Sweeper";

const ProductList = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: (item.quantity + quantity) * item.price,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity, totalPrice: product.price * quantity },
        ];
      }
    });
  };

  const products = [
    { id: 1, name: "Fall Limited Edition Sneakers", price: 125 },
  ];

  return (
    <div className="h-screen flex justify-around flex-col">
      <Header cart={cart} setCart={setCart} />
      <div className="flex justify-around items-center">
        <div>
          <Sweeper />
        </div>
        <div className="flex justify-between items-start flex-col w-[445px] h-[426px]">
          <ProductDiscription />
          <PriceUI />
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
