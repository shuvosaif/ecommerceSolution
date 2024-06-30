import React from "react";
import image from "../../../assets/image/portrait-two-african-females.svg";

const UpperPart = () => {
  return (
    <div className="">
      <p> Home / About</p>
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/3">
          <p className="font-bold text-3xl">Our Story</p>
          <p className="text-sm py-2">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-sm">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-2/3">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
