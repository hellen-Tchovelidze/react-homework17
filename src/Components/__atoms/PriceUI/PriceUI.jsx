const PriceUI = () => {
    return (
        <>
      <div className=" max-lg:flex justify-between items-start w-full max-sm:w-[340px]">
      <div className=" flex justify-between items-center w-[200px]">
        <h1 className="text-4xl font-bold text-[#1D2026]">$125.00</h1>
        <div className=" flex justify-center items-center font-bold text-[#FF7E1B] bg-[#FFEEE2] rounded-md w-[51px]"><p>50%</p></div>
        </div>
        <div>
            <h1 className=" text-[#B6BCC8] line-through">$250.00</h1>
        </div>
      </div>
        
        </>
    )
  };
  
  export default PriceUI;
  