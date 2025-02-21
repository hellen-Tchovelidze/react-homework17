import { useReducer } from "react";

const initialValue = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count > 1 ? state.count - 1 : 1 }; 
    default:
      return state;
  }
}

const Counter = ({ quantity, setQuantity }) => {
  const [state, dispatch] = useReducer(reducer, { count: quantity });

  const handleChange = (type) => {
    dispatch({ type });
    setQuantity(type === "INCREMENT" ? state.count + 1 : Math.max(1, state.count - 1));
  };

  return (
    <div className=" flex justify-around items-center w-[157px] h-[56px] bg-[#F6F8FD] rounded-[10px]">
      <button onClick={() => handleChange("DECREMENT")} className=" text-[#FF7E1B]">-</button>
      <span className=" text-[#1D2026]"> {state.count} </span>
      <button onClick={() => handleChange("INCREMENT")} className=" text-[#FF7E1B]">+</button>
    </div>
  );
};

export default Counter;
