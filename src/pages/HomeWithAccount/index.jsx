import React from 'react'
import SidebarBanner from '../../components/SidebarBanner/SidebarBanner'
import FlashToday from './Flash/FlashToday'
import FlashCategory from './Flash/FlashCategory'
import FlashMonth from './Flash/FlashMonth'
import Banner from './Flash/Banner'
import FlashOurProduct from './Flash/FlashOurProduct'
import FlashFeatured from './Flash/FlashFeatured'
import Service from './Flash/Service'

const HomeWithAccount = () => {
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

export default HomeWithAccount
