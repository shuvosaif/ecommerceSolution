import Lcd from "../../../assets/image/g27cq4-500x5001.svg";
import React from "react";

const UpperPart = () => {
  return (
    <div>
      <div>
        <div className="border-2  p-5">
          <ul className="flex flex-row justify-between items-center gap-5">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul className="flex flex-row justify-between items-center gap-5">
            <li>
              <img className="w-1/3 h-1/2" src={Lcd} alt="" />
            </li>
            <li>$650</li>
            <li>$650</li>
            <li>$650</li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="border-2 px-5 py-3">Return To Shop</button>
        <button className="border-2 px-5 py-3">Update Cart </button>
      </div>
      <div className="w-full">
        <div className=" w-1/2 flex flex-row justify-between items-center gap-4">
          <div>
            <input placeholder=" Coupoon Code" className="p-2 border-2 " />
          </div>
          <div>
            <button className="bg-red-500 px-4 py-2"> Apply Coupon </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UpperPart;
