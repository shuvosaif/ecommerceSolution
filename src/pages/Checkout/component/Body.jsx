import React from "react";
import Lcd from "../../../assets/image/g27cq4-500x5001.svg";
import Gamepad from "../../../assets/image/g92-2-500x5001.svg";
import logo1 from "../../../assets/image/image30.svg";
import logo2 from "../../../assets/image/image31.svg";
import logo3 from "../../../assets/image/image32.svg";
import logo4 from "../../../assets/image/image33.svg";

const Body = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-20">
      <div className="w-1/2 flex flex-col justify-between items-center gap-5 ">
        <p className="text-3xl">Billing Information</p>
        <div className="my-2">
          <p>First Name</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Company Name</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Street Address</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Apartment, Floor etc</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Town/City</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Phone Number</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <p>Email Address</p>
          <input className="bg-gray-200 p-2 rounded-sm" placeholder=""></input>
        </div>
        <div className="my-2">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-default-checkbox"
          />
          <label
            for="hs-default-checkbox"
            className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
          >
            Save this information for faster check-out next time
          </label>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between items-center gap-20">
        <div>
          <div className="flex flex-row justify-between items-center gap-24 my-5">
            <div className="flex flex-row justify-between items-center gap-5">
              <img src={Lcd} className="w-14 h-14" />
              <span>Lcd Monitor</span>
            </div>
            <div>
              <span> $1350</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 ">
            <div className="flex flex-row justify-between items-center gap-5">
              <img src={Gamepad} className="w-14 h-14" />
              <span>Gamepad</span>
            </div>
            <div>
              <span> $1350</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 border-b">
            <div className="flex flex-row justify-between items-center gap-5 ">
              <span>Subtotal</span>
            </div>
            <div>
              <span> $1350</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 border-b">
            <div className="flex flex-row justify-between items-center gap-5">
              <span>Shipping</span>
            </div>
            <div>
              <span> Free</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 ">
            <div className="flex flex-row justify-between items-center gap-5">
              <span>Total</span>
            </div>
            <div>
              <span> $160</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 ">
            <div className="flex flex-row justify-between items-center gap-28">
              <div className="flex  flex-row ">
                <input
                  type="radio"
                  name="hs-default-radio"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-default-radio"
                />
                <label
                  for="hs-default-radio"
                  className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                >
                  Bank
                </label>
              </div>
              <div className="flex flex-row">
                <img src={logo1} alt="" className="w-15 h-15 p-2" />
                <img src={logo2} alt="" className="w-15 h-15 p-2" />
                <img src={logo3} alt="" className="w-15 h-15 p-2" />
                <img src={logo4} alt="" className="w-15 h-15 p-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-28">
            <div className="flex  flex-row ">
              <input
                type="radio"
                name="hs-default-radio"
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-default-radio"
              />
              <label
                for="hs-default-radio"
                className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
              >
                Cash On Delivery
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 ">
            <div className="flex flex-row justify-between items-center gap-5">
              <div className="flex  flex-row ">
                <input
                  className="rounded-sm border-2 p-3"
                  placeholder="Coupon Code "
                />
              </div>
              <div className="flex flex-row">
                <button className="bg-red-500 rounded-lg p-4 text-white">
                  {" "}
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-24 my-5 ">
            <div className="flex flex-row justify-between items-center gap-5">
              <div className="flex flex-row">
                <button className="bg-red-500 rounded-lg p-4 text-white">
                  {" "}
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
