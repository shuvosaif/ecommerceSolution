import Lcd from "../../../assets/image/g27cq4-500x5001.svg";
import React from "react";

const UpperPart = () => {
  return (
    <div>
      <div>
        <div className="border-2  p-5 ">
          <ul className="flex flex-row justify-between items-center gap-5 border-2 p-2">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul className="flex flex-row justify-between items-center gap-5 border-2 p-2 my-2">
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
      <div className="w-full flex flex-row justify-between items-start gap-40 my-10 ">
        <div className=" w-1/2 flex flex-row justify-between items-center gap-4">
          <div className="w-full flex flex-row justify-between items-center gap-5">
            <input
              placeholder=" Coupoon Code"
              className="w-2/3 p-2 border-2 border-red-500 rounded-sm"
            />
            <button className="w-1/3 bg-red-500 px-4 py-2 text-white">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="w-1/2 border-2  justify-center items-center p-10 gap-5 ">
          <div>
            <p className="font-bold">Cart Total</p>
          </div>
          <div className="flex flex-row gap-5 border-b justify-between items-center my-5">
            <span>Subtotal</span>
            <span>$130</span>
            <hr />
          </div>
          <div className="flex flex-row gap-5 border-b justify-between items-center my-5">
            <p>Shipping</p>
            <p>Free</p>
            <hr />
          </div>
          <div className="flex flex-row gap-5 border-b justify-between items-center my-5">
            <p>Total</p>
            <p>$1780</p>
            <hr />
          </div>
          <button className="bg-red-500 text-white px-4 mx-24 py-2">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
