import React from "react";

const LoginForm = () => {
  return (
    <div className="flex h-full items-center justify-end ">
      <div className="w-4/6">
        <div className="flex flex-col gap-5 ">
          <div>
            <h2 className="text-[30px]"> Log in to Exclusive</h2>
          </div>
          <div>
            <p>Enter Your Details Below</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <input
              placeholder="Enter Email or Phone "
              className="w-full h-[32px]"
            ></input>
            <hr />
          </div>
          <div>
            <input placeholder="Password" className="w-full h-[32px]"></input>
            <hr />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div className="w-full h-full">
            <button className="h-full w-2/6 rounded-lg p-5 text-white bg-red-500 ">
              Login
            </button>
          </div>
          <p className="">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
