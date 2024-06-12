import React from "react";
import SideImageLogin from "./SideImageLogin";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-12 container py-16 pl-0">
        <div className="col-span-6 ">
          <SideImageLogin />
        </div>
        <div className="col-span-6">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
