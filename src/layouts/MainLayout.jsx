import React from "react";
import TopHeader from "./component/Navbar/TopHeader";
import Header from "./component/Navbar/Header";
import FooterPart from "./component/Footer/FooterPart";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <FooterPart />
    </>
  );
};

export default MainLayout;
