import React from "react";
import SideImage from "./components/SideImage";
import SignupForm from "./components/SignupForm";

const SignUp = () => {
  return (
    <>
      <div className=" container grid grid-cols-12 border-2 border-red-600">
        <div className="col-span-6 border-2 border-green-600">
          <SideImage />
        </div>
        <div className="col-span-6 flex flex-col justify-center items-center border-2 border-yellow-600 ">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
