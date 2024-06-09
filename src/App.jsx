import React from 'react'
import TopHeader from './components/Navbar/TopHeader'
import Header from './components/Navbar/Header'
import SidebarBanner from './components/SidebarBanner/SidebarBanner'
import FlashToday from './components/Flash/FlashToday'
import FlashCategory from './components/Flash/FlashCategory'
import FlashMonth from './components/Flash/FlashMonth'
import Banner from './components/Flash/Bannner'
import FlashOurProduct from './components/Flash/FlashOurProduct'
import FlashFeatured from './components/Flash/FlashFeatured'
import Service from './components/Footer/Service'
import FooterPart from './components/Footer/FooterPart'

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <SidebarBanner />
      <FlashToday />
      <FlashCategory />
      <FlashMonth />
      <Banner />
      <FlashOurProduct />
      <FlashFeatured />
      <Service />
      <FooterPart />
    </>
  )
}

export default App
