import React from "react";
import bannerLogo from "../../../assets/image/hero_endframe__cvklg0xk3w6e_large 2.svg";
import appleLogo from "../../../assets/icon/1200px-Apple_gray_logo 1.svg";
import arrowLogo from "../../../assets/icon/Vector_(3)_h.svg";
import sideArrowLogo from "../../../assets/icon/Vector_h.svg";

const SidebarBanner = () => {
  return (
    <div className="container flex flex-col lg:flex-row justify-start gap-10 pt-10">
      <div className="w-3/12 border-r">
        <ul>
          <li>
            <div className="flex flex-row items-center">
              <div className="w-3/4 items-center">Womans Fashion</div>
              <div className="w-1/4 items-center">
                <img src={sideArrowLogo} />
              </div>
              <p></p>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center">
              <div className="w-3/4 items-center">Men's Fashion</div>
              <div className="w-1/4 items-center">
                <img src={sideArrowLogo} />
              </div>
              <p></p>
            </div>
          </li>
          <li>Electronic </li>
          <li>Home & Lifestyle </li>
          <li>Medicine</li>
          <li>Sports Outdoor </li>
          <li>Baby's & Toys </li>
          <li>Groceries & Pets </li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className=" w-9/12 p-6 border-2 bg-black flex flex-row justify-between items-center ">
        <div className="w-5/12  p-6 ">
          <div className="flex flex-row text-white gap-2 items-center pb-4">
            <img src={appleLogo} className="w-1/8" />
            <p>iPhone 14 Series</p>
          </div>
          <div className="pb-4">
            <h1 className="text-white text-5xl">Up to 10% off Voucher</h1>
          </div>
          <div className="flex flex-row text-white gap-4 pb-4">
            <p>Shop Now</p>
            <img src={arrowLogo} />
          </div>
        </div>
        <div className="w-7/12 ">
          <img className="" src={bannerLogo} />
        </div>
      </div>
    </div>
  );
};

export default SidebarBanner;
