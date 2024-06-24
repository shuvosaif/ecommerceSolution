import React from "react";
import barLogo from "../../../assets/icon/Ellipse_8.svg";
import rightArrow from "../../../assets/icon/Vector.svg";
import leftArrow from "../../../assets/icon/Vector_(1).svg";
import bag from "../../../assets/image/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag1.svg";
import favouriteLogo from "../../../assets/icon/Vector_(2).svg";
import quickView from "../../../assets/icon/QuickView.svg";
import ratingStar from "../../../assets/icon/Vector_(3).svg";
import jacket from "../../../assets/image/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat1.svg";
import casset from "../../../assets/image/gammaxx-l240-argb-1-500x5001.svg";
import bookShelf from "../../../assets/image/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash1.svg";

const FlashMonth = () => {
  return (
    <div className="container py-14">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* upperpart with time & left right */}
        <div className="flex flex-col lg:flex-row  items-center gap-20">
          {/* text & Time */}
          <div>
            {/* Text */}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Today */}
              <div className="w-5 h-10 bg-red-600 rounded-lg"></div>
              <div className="">Just For You</div>
            </div>
            {/* <div className="text-[36px]">Best Selling Products</div> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 py-20">
          {/* Button left & Right */}
          <button className="border-2 rounded-md px-8 py-4 ">See All</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col w-3/12  ">
          {/* Lowerpart With card */}
          <div className="bg-gray-200 flex flex-col lg:flex-row">
            {/* photo */}
            <div className="w-full p-1">
              <img
                src={jacket}
                className=" mx-auto items-center w-full m-10 h-44 "
              />
            </div>
            {/* Icon */}
            <div className=" w-1/3 mt-2 flex flex-col gap-2">
              <div>
                <img
                  src={favouriteLogo}
                  className="bg-white rounded-full border-1 p-2 "
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className="bg-white rounded-full border-1 p-2"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {/* Text */}
              <p>HAVIT HV-G92 Gamepad</p>
            </div>
            <div className="flex flex-row gap-2">
              {/* price */}
              <div>
                <p>$120</p>
              </div>
              <div>
                <p className="line-through text-gray-300">$160</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              {/* rating */}
              <div className="flex flex-row">
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/12 ">
          {/* Lowerpart With card */}
          <div className="bg-gray-200 flex flex-col lg:flex-row">
            {/* photo */}
            <div className="w-full p-1">
              <img
                src={bag}
                className=" mx-auto items-center w-full m-10 h-44 "
              />
            </div>
            {/* Icon */}
            <div className=" w-1/3 mt-2 flex flex-col gap-2">
              <div>
                <img
                  src={favouriteLogo}
                  className="bg-white rounded-full border-1 p-2 "
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className="bg-white rounded-full border-1 p-2"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {/* Text */}
              <p>AK-900 Wired Keyboard</p>
            </div>
            <div className="flex flex-row gap-2">
              {/* price */}
              <div>
                <p>$960</p>
              </div>
              <div>
                <p className="line-through text-gray-300">$1160</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              {/* rating */}
              <div className="flex flex-row">
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/12  ">
          {/* Lowerpart With card */}
          <div className="bg-gray-200 flex flex-col lg:flex-row">
            {/* photo */}
            <div className="w-full p-1">
              <img
                src={casset}
                className=" mx-auto items-center w-full m-10 h-44"
              />
            </div>
            {/* Icon */}
            <div className=" w-1/3 mt-2 flex flex-col gap-2">
              <div>
                <img
                  src={favouriteLogo}
                  className="bg-white rounded-full border-1 p-2 "
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className="bg-white rounded-full border-1 p-2"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {/* Text */}
              <p>S-Series Comfort Chair </p>
            </div>
            <div className="flex flex-row gap-2">
              {/* price */}
              <div>
                <p>$375</p>
              </div>
              <div>
                <p className="line-through text-gray-300">$400</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              {/* rating */}
              <div className="flex flex-row">
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/12 ">
          {/* Lowerpart With card */}
          <div className="bg-gray-200 flex flex-col lg:flex-row">
            {/* photo */}
            <div className="w-full p-1">
              <img
                src={bookShelf}
                className=" mx-auto items-center w-full m-10 h-44 "
              />
            </div>
            {/* Icon */}
            <div className=" w-1/3 mt-2 flex flex-col gap-2">
              <div>
                <img
                  src={favouriteLogo}
                  className="bg-white rounded-full border-1 p-2 "
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className="bg-white rounded-full border-1 p-2"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {/* Text */}
              <p>IPS LCD Gaming Monitor</p>
            </div>
            <div className="flex flex-row gap-2">
              {/* price */}
              <div>
                <p>$370</p>
              </div>
              <div>
                <p className="line-through text-gray-300">$460</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              {/* rating */}
              <div className="flex flex-row">
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashMonth;
