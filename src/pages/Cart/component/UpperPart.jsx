import React from "react";

const UpperPart = () => {
  return (
    <div>
      <div>
              <div className="border-2  p-5">
                  <ul className="flex flex-row justify-between items-center gap-5">
                      <li>Product</li>
                      <li>Price</li>
                      <li>Quantity</li>
                      <li>Subtotal</li>
                  </ul>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="border-2 px-5 py-3">Return To Shop</button>
        <button className="border-2 px-5 py-3">Update Cart </button>
      </div>
    </div>
  );
};

export default UpperPart;
