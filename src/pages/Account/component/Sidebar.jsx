import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="my-5">
        <span>Home / My Account</span>
      </div>
      <div>
        <span className="font-bold"> Manage My Account </span>

        <div className="p-5">
          <ul className="">
            <li className="text-red-500">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
        </div>
      </div>
      <div>
        <span className="font-bold"> My Order </span>

        <div className="p-5">
          <ul className="">
            <li>My Return</li>
            <li>My Cancellation</li>
          </ul>
        </div>
      </div>
      <div>
        <span className="font-bold"> My Wishlist </span>
      </div>
    </div>
  );
};

export default Sidebar;
