import React from 'react'
import bannerPic from '../../assets/image/JBL_BOOMBOX_2_HERO_020_x1.svg'
const Bannner = () => {
  return (
    <div className='container pt-36'>
      <div className='flex justify-between items-center text-white bg-black '>
        <div className='flex flex-col gap-10 justify-center m-14 w-1/3'>
          <div>
            <p className='text-green-500'>Categories</p>
          </div>
          <div>
            <h1 className='text-white text-5xl'>
              Enhance Your Music Experience
            </h1>
          </div>
          <div className='flex flex-row  items-center gap-5'>
            <div className=' flex flex-col w-16 h-16 rounded-full bg-white text-black justify-center items-center'>
              <p>23 </p>
              <p>Hours </p>
            </div>
            <div className='flex flex-col w-16 h-16 rounded-full bg-white text-black justify-center  items-center'>
              <p>05 </p>
              <p>Days </p>
            </div>
            <div className='flex flex-col w-16 h-16 rounded-full bg-white text-black justify-center items-center'>
              <p>59 </p>
              <p>Minutes </p>
            </div>
            <div className='flex flex-col w-16 h-16 rounded-full bg-white text-black justify-center items-center'>
              <p>35 </p>
              <p>Seconds </p>
            </div>
          </div>
          <div className=' flex justify-start items-center'>
            <button className='bg-green-500 text-white rounded-lg px-10 py-5 '>
              Buy Now
            </button>
          </div>
        </div>
        <div className='w-2/3'>
          <img className='' src={bannerPic} />
        </div>
      </div>
    </div>
  )
}

export default Bannner
