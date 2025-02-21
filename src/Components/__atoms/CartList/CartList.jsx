import RedirectButton from "../RedirectButton/RedirectButton";

import mainPhoto from "../../../assets/images/mainPhoto.png";

const CartList = ({ cart = [], onRemove }) => {
  return (
    <ul>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center  flex-col mb-4"
          >
            <div className=" flex justify-between items-start"> card 
              <div className=" w-full h-[1px] bg-black"></div>
            </div>
            
              <div className="flex  ">
                <div className="flex justify-between">
                  <img src={mainPhoto} alt="" className=" w-50px h-[50px]" />
                </div>
                <div className="flex justify-between flex-col">
                  <span className="font-bold">{item.name}</span>
                  <span>
                    {" "}
                    ${item.price} x {item.quantity} ${item.totalPrice}
                    <button
                onClick={() => onRemove(item.id)}
                className="text-white p-2 rounded-md bg-amber-500 hover:bg-red-600 ml-4"
              >
                <h1>del</h1>
              </button>
                  </span>
                </div>
              </div>

            
            
            <RedirectButton />
          </li>
        ))
      ) : (
        <li>Cart is empty</li>
      )}
    </ul>
  );
};

export default CartList;
