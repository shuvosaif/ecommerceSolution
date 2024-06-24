import React from "react";
import appStore from "../../../assets/image/AppStore.svg";
import googlePlayStore from "../../../assets/image/google-play-store-logo.svg";
import qrCode from "../../../assets/image/QrCode.svg";
import instagram from "../../../assets/icon/icon-instagram(1).svg";
import linkedIn from "../../../assets/icon/Icon-Linkedin.svg";
import twitter from "../../../assets/icon/Icon-Twitter.svg";
import facebook from "../../../assets/icon/Icon-Facebook.svg";

const FooterPart = () => {
  return (
    <div className="bg-black text-white">
      <div className="container p-28 grid grid-cols-12 gap-5">
        <div className="col-span-2 flex flex-col gap-5">
          <h2 className="text-[24px]">Exclusive</h2>
          <h2 className="text-[18px]">Subscribe</h2>
          <p>Get 10% off your first order</p>
          <button className="border-2 border-white h-10 w-38 rounded-lg "></button>
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <h2 className="text-[24px]">Support</h2>
          <h2 className="text-[18px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h2>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <h2 className="text-[24px]">Account</h2>
          <h2 className="text-[18px]">My Account</h2>
          <p>Login / Register</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <h2 className="text-[24px]">Quick Link</h2>
          <h2 className="text-[18px]">Privacy Policy</h2>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="col-span-2 flex flex-col gap-5  ">
          <h2 className="text-[24px]">Download App</h2>
          <h2 className="text-[18px]">Save $3 with App New User Only</h2>
          <div className="flex flex-row gap-2">
            <div>
              <img src={qrCode} />
            </div>
            <div className="flex flex-col gap-2">
              <img src={googlePlayStore} />
              <img src={appStore} />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={linkedIn} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        <p className="text-[26px]"> @Copyright Saif 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default FooterPart;
