import React from "react";
import barLogo from "../../../assets/icon/Ellipse_8.svg";
import rightArrow from "../../../assets/icon/Vector.svg";
import leftArrow from "../../../assets/icon/Vector_(1).svg";
import cellPhone from "../../../assets/icon/Category-CellPhone.svg";
import camera from "../../../assets/icon/Category-Camera.svg";
import computer from "../../../assets/icon/Category-Computer.svg";
import gamePad from "../../../assets/icon/Category-Gamepad.svg";
import headPhone from "../../../assets/icon/Category-Headphone.svg";
import smartWatch from "../../../assets/icon/Category-SmartWatch.svg";

const FlashCategory = () => {
  return (
    <div>
      <div className="container pt-36 mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* upperpart & left right arrow */}
          <div className="flex flex-col lg:flex-row  items-center gap-20">
            {/* text & Time */}
            <div>
              {/* Text */}
              <div className="flex flex-col lg:flex-row items-center gap-4">
                {/* Today */}
                <div className="w-5 h-10 bg-red-600 rounded-lg"></div>
                <div className="text-red-500"> Categories</div>
              </div>
              <div className="text-[36px]">Browse By Category</div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            {/* Button left & Right */}
            <img
              src={leftArrow}
              className="bg-gray-100 rounded-full border-1  p-2"
            />

            <img
              src={rightArrow}
              className="bg-gray-100 rounded-full border-1  p-2"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center  gap-6  my-10">
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32">
                <img
                  src={cellPhone}
                  className=" mx-auto items-center  m-10  "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32">
                <img src={computer} className=" mx-auto items-center  m-10  " />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32">
                <img
                  src={smartWatch}
                  className=" mx-auto items-center  m-10  "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32 bg-red-500">
                <img src={camera} className=" mx-auto items-center  m-10  " />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32">
                <img
                  src={headPhone}
                  className=" mx-auto items-center  m-10  "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  ">
            {/* Lowerpart With card */}
            <div className="flex flex-col lg:flex-row">
              {/* photo */}
              <div className=" border-2 w-40 h-32">
                <img src={gamePad} className=" mx-auto items-center  m-10  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCategory;
