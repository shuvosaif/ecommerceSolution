import React from "react";
import TopHeader from "./components/Navbar/TopHeader";
import Header from "./components/Navbar/Header";
import SidebarBanner from "./components/SidebarBanner/SidebarBanner";
import FlashToday from "./components/Flash/FlashToday";
import FlashCategory from "./components/Flash/FlashCategory";
import FlashMonth from "./components/Flash/FlashMonth";
import Bannner from "./components/Flash/Bannner";

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <SidebarBanner />
      <FlashToday />
      <FlashCategory />
      <FlashMonth />
      <Bannner/>
    </>
  );
};

export default App;
