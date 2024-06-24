import React from "react";
import SidebarBanner from "../../layouts/component/SidebarBanner/SidebarBanner";
import FlashToday from "./Flash/FlashToday";
import FlashCategory from "./Flash/FlashCategory";
import FlashMonth from "./Flash/FlashMonth";
import FlashOurProduct from "./Flash/FlashOurProduct";
import FlashFeatured from "./Flash/FlashFeatured";
import Service from "./Flash/Service";
import Banner from "./Flash/Banner";

const Home = () => {
  return (
    <>
      <SidebarBanner />
      <FlashToday />
      <FlashCategory />
      <FlashMonth />
      <Banner />
      <FlashOurProduct />
      <FlashFeatured />
      <Service />
    </>
  );
};

export default Home;
