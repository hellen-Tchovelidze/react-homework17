import { useState } from "react";
import Counter from "../../__atoms/Counter/Counter";
import Button from "../../__atoms/AddButton/AddButton";

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" flex justify-between items-start">
    
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <Button onClick={() => addToCart(product, quantity)}>
        {quantity} 
      </Button>
    </div>
  );
};

export default Product;
