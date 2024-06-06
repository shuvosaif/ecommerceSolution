import React from "react";
import TopHeader from "./components/Navbar/TopHeader";
import Header from "./components/Navbar/Header";
import SidebarBanner from "./components/SidebarBanner/SidebarBanner";
import FlashToday from "./components/Flash/FlashToday";

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <SidebarBanner />
      <FlashToday />
    </>
  );
};

export default App;
