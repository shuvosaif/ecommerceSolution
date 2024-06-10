import React from 'react'
import searchLogo from '../../assets/icon/Vector_(2).svg'
import cartLogo from '../../assets/icon/Cart1_with_buy.svg'

const Header = () => {
  return (
    <div className=' container text-base flex flex-col lg:flex-row justify-between items-center border-b '>
      <div className='items-center'>Exclusive Item</div>
      <div className='items-center'>
        <ul className='flex flex-col lg:flex-row justify-between gap-4'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <i className='fa-solid fa-magnifying-glass'></i>
      <div className='flex flex-col lg:flex-row justify-end gap-4 border-2 border-red-400'>
        <input
          className='rounded-lg bg-gray-80'
          placeholder='What are you are looking for'
        ></input>
        <img src={searchLogo} />
        <img src={cartLogo} />
      </div>
    </div>
  )
}

export default Header
