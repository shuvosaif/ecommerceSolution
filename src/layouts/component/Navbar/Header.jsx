import React from "react";
import searchLogo from "../../../assets/icon/Vector_(2).svg";
import cartLogo from "../../../assets/icon/Cart1_with_buy.svg";

const Header = () => {
  return (
    <div className=" container text-base flex flex-col lg:flex-row justify-between items-center my-5 ">
      <div className="items-center ">Exclusive</div>
      <div className="items-center ">
        <ul className="flex flex-col lg:flex-row justify-between gap-4">
          <li className="underline">Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="rounded-lg border-2 p-1 bg-gray-100">
          <input
            className="bg-gray-100 text-white"
            placeholder="What are you are looking for"
          ></input>
          <i className="fa-solid fa-magnifying-glass mt-2"></i>
        </div>
        <div className="flex flex-row gap-4">
          <svg
            className="h-8 w-8 text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
          <div className="relative  ">
            <span className="flex justify-center items-center absolute -right-2 -top-3 bg-red-500 text-white rounded-lg w-5 h-5 ">
              5
            </span>
            <svg
              className="h-8 w-8 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
        <div className="relative inline-block text-left">
          <div>
            <svg
              class="h-8 w-8 text-slate-500"
              fill="red"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-fuchsia-200  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1 text-slate-100" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Manage My Account
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                My Order
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                My Cancellation
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
