import React from "react";

const RightPart = () => {
  return (
    <div className="border-2 border-gray-300 p-5 ">
      <p className="text-red-500 px-16 py-5">Edit Your Profile</p>
      <div className=" px-16 flex flex-row justify-between items-center gap-10">
        <div>
          <p className="font-bold">First Name</p>
          <input
            type="text"
            placeholder="Enter First Name "
            className="p-3 rounded-md bg-gray-200"
          />
        </div>
        <div>
          <p className="font-bold">Last Name</p>
          <input
            type="text"
            placeholder="Enter First Name "
            className="p-3 rounded-md bg-gray-200"
          />
        </div>
      </div>
      <div className=" px-16 flex flex-row justify-between items-center gap-10">
        <div>
          <p className="font-bold">Email</p>
          <input
            type="text"
            placeholder="Enter First Name "
            className="p-3 rounded-md bg-gray-200"
          />
        </div>
        <div>
          <p className="font-bold">Address</p>
          <input
            type="text"
            placeholder="Enter First Name "
            className="p-3 rounded-md bg-gray-200"
          />
        </div>
      </div>
      <div className=" px-16  ">
        <div className="items-center flex flex-col gap-5">
          <p className="font-bold">Password Change</p>
          <input
            type="text"
            placeholder="Current Password "
            className="p-3 rounded-md bg-gray-200 w-full"
          />
          <input
            type="text"
            placeholder="New Password "
            className="p-3 rounded-md bg-gray-200 w-full"
          />
          <input
            type="text"
            placeholder="Confirm Password "
            className="p-3 rounded-md bg-gray-200 w-full"
          />
        </div>
      </div>
      <div className=" px-16 py-5  ">
        <div className="items-center flex flex-row gap-5 justify-end">
          <p className="font-bold">canel</p>
          <button className="p-3 rounded-md bg-red-500 text-white">
            Save Canges
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
