import React from 'react'
import TopHeader from '../components/Navbar/TopHeader'
import Header from '../components/Navbar/Header'
import FooterPart from '../components/Footer/FooterPart'

const MainLayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <FooterPart />
    </>
  )
}

export default MainLayout
