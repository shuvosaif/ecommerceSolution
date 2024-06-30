import React from "react";
import Sidebar from "./component/Sidebar";
import RightPart from "./component/RightPart";

const Account = () => {
  return (
    <div className="container flex flex-row justify-between items-start py-10">
      <Sidebar />
      <RightPart />
    </div>
  );
};

export default Account;
