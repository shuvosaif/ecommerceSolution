import React from "react";
import bannerLogo from "../../assets/image/hero_endframe__cvklg0xk3w6e_large 2.svg";

const SidebarBanner = () => {
  return (
    <div className="container flex flex-col lg:flex-row justify-start gap-10 pt-10">
      <div className="w-3/12 border-r">
        <ul>
          <li>Womans Fashion</li>
          <li>Men's Fashion </li>
          <li>Electronic </li>
          <li>Home & Lifestyle </li>
          <li>Medicine</li>
          <li>Sports Outdoor </li>
          <li>Baby's & Toys </li>
          <li>Groceries & Pets </li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className=" w-9/12 px-10">
        <img className="w-full" src={bannerLogo} />
      </div>
    </div>
  );
};

export default SidebarBanner;
