import RedirectButton from "../RedirectButton/RedirectButton";
import trash from "../../../assets/images/trash.svg";
import mainPhoto from "../../../assets/images/mainPhoto.png";

const CartList = ({ cart = [], onRemove }) => {
  return (
    <ul>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start  flex-col  h-[200px] mb-4 max-sm:w-[300px] "
          >
            <div className=" flex justify-between items-start flex-col  text-[16px] font-bold"> Card 
              <div className=" w-[300px] h-[1px] bg-[#E4E9F2] max-sm:w-[300px]" ></div>
            </div>
            
              <div className="flex gap-1 ">
                <div className="flex justify-between">
                  <img src={mainPhoto} alt="" className=" w-50px h-[50px]" />
                </div>
                <div className="flex justify-between flex-col">
                  <span className="font-light">{item.name}</span>
                  <span className=" font-light">
                    {" "}
                    ${item.price} x {item.quantity} <span className=" font-bold">${item.totalPrice}</span>
                    <button
                onClick={() => onRemove(item.id)}
                className="text-white p-2 rounded-md  ml-4"
              >
              <img src={trash} alt="" />
              </button>
                  </span>
                </div>
              </div>

            
            
            <RedirectButton />
          </li>
        ))
      ) : (
        <li className=" text-[#69707D] font-bold">Your cart is empty.</li>
      )}
    </ul>
  );
};

export default CartList;
