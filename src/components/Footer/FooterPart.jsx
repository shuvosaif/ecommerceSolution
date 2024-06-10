import React from "react";

const FooterPart = () => {
  return (
    <div className="bg-black text-white">
      <div className="container p-28 grid grid-cols-12">
        <div className="col-span-3 flex flex-col gap-5">
          <h2 className="text-[24px]">Exclusive</h2>
          <h2 className="text-[18px]">Subscribe</h2>
          <p>Get 10% off your first order</p>
          <button className="border-2 border-white h-10 w-45 rounded-lg ">
            
          </button>
        </div>
        <div className="col-span-3 flex flex-col gap-5"></div>
        <div className="col-span-2"></div>
        <div className="col-span-2"></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default FooterPart;
