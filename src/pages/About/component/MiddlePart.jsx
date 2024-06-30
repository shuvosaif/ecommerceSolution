import React from "react";
import service1 from "../../../assets/icon/Services_about.svg";
import service2 from "../../../assets/icon/Services(1)_about.svg";

const MiddlePart = () => {
  return (
    <div className="py-28">
      <div className="w-full flex flex-row justify-between items-center gap-10">
        <div className="border-2 w-1/4 flex flex-col justify-center items-center p-10 ">
          <div>
            <img src={service1} alt="" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">10.5k </p>
            <p className="text-sm">Sallers active our site</p>
          </div>
        </div>
        <div className="border-2 w-1/4 flex flex-col justify-center items-center p-10 bg-red-500 text-white">
          <div>
            <img src={service2} alt="" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">10.5k </p>
            <p className="text-sm">Sallers active our site</p>
          </div>
        </div>
        <div className="border-2 w-1/4 flex flex-col justify-center items-center p-10 ">
          <div>
            <img src={service1} alt="" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">10.5k </p>
            <p className="text-sm">Sallers active our site</p>
          </div>
        </div>
        <div className="border-2 w-1/4 flex flex-col justify-center items-center p-10 ">
          <div>
            <img src={service1} alt="" className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">10.5k </p>
            <p className="text-sm">Sallers active our site</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MiddlePart;
