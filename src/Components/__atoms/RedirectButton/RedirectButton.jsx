const RedirectButton = () => {
    const handleClick = () => {
      window.location.href = 'https://react-midterm-exam1.vercel.app/';
    };
  
    return (
      <button onClick={handleClick} className=" w-[312px] h-[56px] cursor-pointer bg-[#FF7E1B] font-bold text-white rounded-[10px] max-sm:w-[270px]">
       Checkout
      </button>
    );
  };
  
  export default RedirectButton;
  