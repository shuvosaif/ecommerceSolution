import React from "react";
import SideImage from "./components/SideImage";
import SignupForm from "./components/SignupForm";

const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-12 container py-16 pl-0">
        <div className="col-span-6 ">
          <SideImage />
        </div>
        <div className="col-span-6">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
