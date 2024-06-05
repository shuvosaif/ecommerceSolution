import React from "react";
import DropArrow from "../../assets/icon/down-arrow.svg";

const TopHeader = () => {
  return (
    <>
      <div className=" container bg-black text-white flex flex-col  lg:flex-row justify-between  gap-20 pt-10 pb-2">
        <div className="">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 70%!
          ShopNow
        </div>
        <div className="w-2/12 items-center lg:items-center flex flex-col lg:flex-row justify-end">
          <div>English</div>
          <div>
            <img src={DropArrow} className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
