import React from "react";
import person1 from "../../../assets/image/image46_about.svg";
import person2 from "../../../assets/image/image47_about.svg";
import person3 from "../../../assets/image/image51_about.svg";

const LowerPart = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-5">
        <div>
          <img className="bg-gray-300 border-b p-4" src={person1} alt="" />
        </div>
        <div>
          <img className="bg-gray-300 border-b p-4" src={person2} alt="" />
        </div>
        <div>
          <img className="bg-gray-300 border-b p-4" src={person3} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LowerPart;
