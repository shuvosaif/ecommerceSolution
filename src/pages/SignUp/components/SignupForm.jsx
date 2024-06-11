import React from "react";
import googleLogo from "../../../assets/icon/Icon-Google.svg";

const SignupForm = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-5 ">
        <div>
          <h2 className="text-[30px]"> Create An Account</h2>
        </div>
        <div>
          <p>Enter Your Details Below</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div>
          <input placeholder="Name " className="w-full h-[32px]"></input>
          <hr />
        </div>
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
          <button className="h-full w-full rounded-lg p-5 border-2 bg-red-500 text-white ">
            Create Account
          </button>
        </div>
        <div className=" flex flex-row justify-center items-center border-2 rounded-lg  ">
          <div className=" ">
            <img src={googleLogo} />
          </div>
          <div className=" ">
            <input
              type="text"
              className="h-14 w-90 p-5  "
              placeholder="Sign Up With Google"
            />
          </div>
        </div>

        <p>
          already have an account ? <h2 className="text-[12px]">LogIn</h2>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
