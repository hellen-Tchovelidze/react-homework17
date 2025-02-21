const PriceUI = () => {
    return (
        <>
        <div className=" flex justify-between items-center w-[200px]">
        <h1 className="text-4xl">$125.00</h1>
        <div className=" flex justify-center items-center bg-[#FFEEE2] rounded-md w-[51px]"><p>50%</p></div>
        </div>
        <div>
            <h1 className=" text-[#B6BCC8] line-through">$250.00</h1>
        </div>
        
        </>
    )
  };
  
  export default PriceUI;
  