import React from "react";
import gamepadHavic1 from "../../../assets/image/image57.svg";
import gamepadHavic2 from "../../../assets/image/image58.svg";
import gamepadHavic3 from "../../../assets/image/image59.svg";
import gamepadHavic4 from "../../../assets/image/image61.svg";
import gamepadHavic5 from "../../../assets/image/image63.svg";
import review from "../../../assets/icon/Vector_(3).svg";
import eclipse from "../../../assets/icon/Group1000005935(1).svg";
import eclipse1 from "../../../assets/icon/Group1000005935.svg";
import Love from "../../../assets/icon/Vector(1)_h.svg";
import delivery from "../../../assets/icon/icon-delivery.svg";
import returned from "../../../assets/icon/Icon-return.svg";

const Upperpart = () => {
  return (
    <>
      <div>
        <p className="text-xl py-5">Account / Gaming / Havic HV G-91 Gamepad</p>
      </div>
      <div className=" w-full flex flex-row justify-between items-start py-10 gap-10 ">
        <div className="w-2/3 flex flex-row justify-between items-start gap-5">
          <div className="w-1/3 flex flex-col gap-5 justify-center items-start ">
            <div className="bg-gray-100 shadow-md ">
              <img src={gamepadHavic1} alt="" className="p-3" />
            </div>
            <div className="bg-gray-100 shadow-md ">
              <img src={gamepadHavic2} alt="" className="p-3" />
            </div>
            <div className="bg-gray-100 shadow-md ">
              <img src={gamepadHavic3} alt="" className="p-3" />
            </div>
            <div className="bg-gray-100 shadow-md ">
              <img src={gamepadHavic4} alt="" className="p-3" />
            </div>
          </div>
          <div className=" w-2/3 h-[570px] bg-gray-100 shadow-md  flex flex-col justify-center items-center">
            <img src={gamepadHavic5} alt="" className=" w-full p-5" />
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <h1 className="text-3xl font-bold">Havic HV G-92 Gamepad</h1>
            <div className="flex flex-col justify-start items-start ">
              <div className="flex flex-row  items-center  gap-6">
                <div className="flex flex-row py-2 ">
                  <img src={review} className="" />
                  <img src={review} className="" />
                  <img src={review} className="" />
                  <img src={review} className="" />
                </div>
                <div className="text-gray-300">
                  <span> (150 Reviews) | In Stock</span>
                </div>
              </div>
              <div className="">
                <p className="text-2xl py-2">$192.00</p>
                <span>
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-4 py-2">
                <span>Color : </span>
                <img src={eclipse} alt="" />
                <img src={eclipse1} alt="" />
              </div>
              <div className="flex flex-row justify-start items-center gap-4 py-2 w-full">
                <span>Size : </span>
                <input
                  type="text"
                  placeholder="XS"
                  className="w-6 border-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="S"
                  className="w-6 border-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="M"
                  className="w-6 border-2 rounded-md bg-red-500 text-white"
                />
                <input
                  type="text"
                  placeholder="L"
                  className="w-6 border-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="XL"
                  className="w-6 border-2 rounded-md"
                />
              </div>
              <div className="my-10 flex flex-row justify-between items-center gap-5">
                <div className="flex flex-row justify-center items-center border-2 px-5 py-2  gap-5 rounded-md">
                  <div className="border-2 px-3 py-2">
                    <button>+</button>
                  </div>
                  <div className="flex-grow"> 2 </div>
                  <div className="border-2 px-3 py-2 bg-red-500 text-white">
                    <button>-</button>
                  </div>
                </div>
                <div>
                  <button className="bg-red-500 rounded-md px-10 py-4 text-white">
                    {" "}
                    Buy Now
                  </button>
                </div>
                <div className="border-2 rounded-md ">
                  <img src={Love} className="p-4" />
                </div>
              </div>
              <div className="flex flex-col justify-between items-center border-2 rounded-sm gap-10">
                <div className="flex flex-row justify-between items-center gap-5 w-full">
                  <div className="w-1/3 flex flex-col items-center">
                    <img src={delivery} className="" />
                  </div>
                  <div className="w-2/3 ">
                    <p>Free Delivery</p>
                    <span>
                      Enter your postal code for Delivery Availability
                    </span>
                  </div>
                </div>
                <hr></hr>
                <div className="flex flex-row justify-between items-center gap-5 w-full">
                  <div className="w-1/3 flex flex-col items-center">
                    <img src={returned} className="" />
                  </div>
                  <div className="w-2/3 ">
                    <p>Return Delivery</p>
                    <span>Free 30 Days Delivery Returns. Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upperpart;
