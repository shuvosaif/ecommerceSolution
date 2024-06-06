import React from "react";
import barLogo from "../../assets/icon/Ellipse_8.svg"

const FlashToday = () => {
  return (
    <div>
      <div>
        {/* upperpart with time & left right */}
        <div>
          {/* text & Time */}
          <div>
            {/* Text */}
            <div>
              {/* Today */}
              <img src={barLogo} className="" />
            </div>
            <div>Flash Sales</div>
          </div>
          <div>
            {/* Time */}
            <div>{/* Days */}</div>
            <div>{/* Hours */}</div>
            <div>{/* Minutes */}</div>
            <div>{/* Seconds */}</div>
          </div>
        </div>
        <div>
          {/* Button left & Right */}
          <img />
          <img />
        </div>
      </div>
      <div>{/* Lowerpart With card */}</div>
    </div>
  );
};

export default FlashToday;
