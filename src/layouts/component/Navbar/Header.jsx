import React from 'react'
import searchLogo from '../../assets/icon/Vector_(2).svg'
import cartLogo from '../../assets/icon/Cart1_with_buy.svg'

const Header = () => {
  return (
    <div className=' container text-base flex flex-col lg:flex-row justify-between items-center my-5 '>
      <div className='items-center'>Exclusive</div>
      <div className='items-center'>
        <ul className='flex flex-col lg:flex-row justify-between gap-4'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className='flex flex-col lg:flex-row justify-end gap-8 rounded-lg border-2 p-1 bg-gray-100'>
        <input
          className='bg-gray-100 text-white'
          placeholder='What are you are looking for'
        ></input>
        <i className='fa-solid fa-magnifying-glass mt-2'></i>
      </div>
    </div>
  )
}

export default Header
