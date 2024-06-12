import React from 'react'
import SidebarBanner from '../../components/SidebarBanner/SidebarBanner'
import FlashToday from '../../components/Flash/FlashToday'
import FlashCategory from '../../components/Flash/FlashCategory'
import FlashMonth from '../../components/Flash/FlashMonth'
import FlashOurProduct from '../../components/Flash/FlashOurProduct'
import FlashFeatured from '../../components/Flash/FlashFeatured'
import Service from '../../components/Flash/Service'
import Banner from '../../components/Flash/Banner'

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
  )
}

export default Home
