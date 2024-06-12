import React from "react";
import googleLogo from "../../../assets/icon/Icon-Google.svg";

const SignupForm = () => {
  return (
    <div className="flex h-full items-center justify-end ">
      <div className="w-4/6">
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
            <button className="h-full w-full rounded-lg p-5 text-white ">
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

          <p className="">
            already have an account ?{" "}
            <span className="text-[12px] underline ">LogIn</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;