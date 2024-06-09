import React from 'react'
import barLogo from '../../assets/icon/Ellipse_8.svg'
import joyStick from '../../assets/image/g92-2-500x5001.svg'
import women from '../../assets/image/attractive-woman-wearing-hat.svg'
import ps5 from '../../assets/image/ps5-slim-goedkope-playstation_large1.svg'
import perfume from '../../assets/image/perfume.svg'

const FlashFeatured = () => {
  return (
    <div className='container pt-36'>
      <div className='flex flex-col lg:flex-row justify-between items-center '>
        {/* upperpart with time & left right */}
        <div className='flex flex-col lg:flex-row  items-center gap-20 '>
          {/* text & Time */}
          <div>
            {/* Text */}
            <div className='flex flex-col lg:flex-row items-center gap-4 '>
              {/* Today */}
              <div className='w-5 h-10 bg-red-600 rounded-lg'></div>
              <div className='text-red-500'> Featured</div>
            </div>
            <div className='text-[36px] mt-2'>New Arrival</div>
          </div>
        </div>
      </div>
      {/* //sdkh */}
      <div className='grid grid-cols-12 grid-row-12 gap-5 mt-5 border-2 border-yellow-500'>
        {/* item one */}
        <div className=' bg-black relative col-span-6 row-span-12'>
          <img src={ps5} alt='' className='h-full w-full' />
          <div className='absolute inset-0 text-white flex items-center justify-center flex-col'>
            <h2 className=''> PlayStation </h2>
            <p className=''>
              Black and White version of the PS5 coming out on sale.{' '}
            </p>
          </div>
        </div>
        {/* item 2 */}
        <div className='bg-black col-span-6 row-span-6 '>
          <img src={women} alt='' />
        </div>
        {/* item 3 */}
        <div className='h-full w-full bg-black  col-span-3 row-span-6  '>
          <img src={perfume} alt='' />
        </div>
        {/* item 4 */}
        <div className='h-full w-full bg-black col-span-3 row-span-6  '>
          <img src={perfume} alt='' />
        </div>
      </div>
    </div>
  )
}

export default FlashFeatured
