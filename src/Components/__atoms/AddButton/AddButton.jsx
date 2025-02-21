import icone from "../../../assets/images/icone.png"


const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className=" flex justify-center items-center  cursor-pointer w-[272px] h-[56px] bg-[#FF7E1B] font-bold text-white rounded-[10px] gap-1 max-lg:w-[427px]  max-sm:w-[340px]"
    >
      <img src={icone} />
      Add to cart
    </button>
  );
};

export default Button;
