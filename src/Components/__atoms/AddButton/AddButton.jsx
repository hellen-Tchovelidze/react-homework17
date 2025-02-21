import icone from "../../../assets/images/icone.png"


const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className=" flex justify-center items-center w-[272px] h-[56px] bg-[#FF7E1B] rounded-[10px] gap-1"
    >
      <img src={icone} alt="" />
      Add to cart
    </button>
  );
};

export default Button;
