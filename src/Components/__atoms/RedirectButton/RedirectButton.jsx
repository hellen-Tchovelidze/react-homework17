const RedirectButton = () => {
    const handleClick = () => {
      window.location.href = 'https://react-midterm-exam1.vercel.app/';
    };
  
    return (
      <button onClick={handleClick} className=" w-[312px] h-[56px] bg-[#FF7E1B] text-white rounded-[10px]">
       Checkout
      </button>
    );
  };
  
  export default RedirectButton;
  