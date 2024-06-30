import React from "react";

const index = () => {
  return (
    <div className="container">
      <div>
        <div>Home / Contact</div>
        <div className="px-52 py-52 flex flex-col justify-center items-center gap-10">
          <p className="text-9xl font-bold">404 Not Found</p>
          <span>Your visited page not found. You may go home page.</span>
          <div className="">
            <button className="bg-red-500 px-16 py-5  text-white rounded-md">
              Back To Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
