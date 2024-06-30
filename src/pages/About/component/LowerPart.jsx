import React from 'react'
import person1 from '../../../assets/image/image46_about.svg'
import person2 from '../../../assets/image/image47_about.svg'
import person3 from '../../../assets/image/image51_about.svg'
import Twitter from '../../../assets/icon/Icon-Twitter.svg'
import Instagram from '../../../assets/icon/icon-instagram.svg'
import LinkedIn from '../../../assets/icon/Icon-Linkedin.svg'
import Delivery from '../../../assets/icon/Services.svg'
import Contact from '../../../assets/icon/Services(1).svg'
import Tick from '../../../assets/icon/Services(2).svg'

const LowerPart = () => {
  return (
    <div>
      <div className='  flex flex-row justify-between items-center gap-10'>
        {/* Number One */}
        <div className='w-full'>
          <div className='relative w-full  h-[410px] bg-gray-300 border-b '>
            <img className='absolute bottom-0 px-5 ' src={person1} alt='' />
          </div>
          <div className='mt-8'>
            <h2 className='text-3xl font-medium'>Tom Cruise</h2>
            <p className='text-base font-normal mt-1'>Founder &amp; Chairman</p>
            <div className='flex flex-row gap-2 mt-2'>
              <a href='#'>
                <img src={Twitter} alt='' className='' />
              </a>
              <a href='#'>
                <img src={Instagram} alt='' className='' />
              </a>
              <a href='#'>
                <img src={LinkedIn} alt='' className='' />
              </a>
            </div>
          </div>
        </div>
        {/* Number Two */}
        <div className='w-full'>
          <div className='relative w-full  h-[410px]  bg-gray-300 border-b'>
            <img className='absolute bottom-0 px-3  ' src={person2} alt='' />
          </div>
          <div className='mt-8'>
            <h2 className='text-3xl font-medium'>Emma Watson</h2>
            <p className='text-base font-normal mt-1'>Managing Director</p>
            <div className='flex flex-row gap-2 mt-2'>
              <a href='#' className=''>
                <img src={Twitter} alt='' className='' />
              </a>
              <a href='#' className=''>
                <img src={Instagram} alt='' className='' />
              </a>
              <a href='#' className=''>
                <img src={LinkedIn} alt='' className='' />
              </a>
            </div>
          </div>
        </div>
        {/* Number Three */}
        <div className='w-full'>
          <div className='relative w-full  h-[410px]  bg-gray-300 border-b '>
            <img className='absolute bottom-0 px-5  ' src={person3} alt='' />
          </div>
          <div className='mt-8'>
            <h2 className='text-3xl font-medium'>Will Smith</h2>
            <p className='text-base font-normal mt-1'>Product Designer</p>
            <div className='flex flex-row gap-2 mt-2'>
              <a href='#' className=''>
                <img src={Twitter} alt='' className='cursor-pointer' />
              </a>
              <a href='#' className=''>
                <img src={Instagram} alt='' className='cursor-pointer' />
              </a>
              <a href='#' className=''>
                <img src={LinkedIn} alt='' className='cursor-pointer' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-20 my-40'>
        <div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <img src={Delivery} className='w-12 h-12' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl'>Free & Fast Delivery</p>
            <p>Free Delivery For All Order Over $140</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <img src={Contact} className='w-12 h-12' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl'>24/7 Customer Service</p>
            <p>Friendly 24/7 Customer Support</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <img src={Tick} className='w-12 h-12' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl'>Free & Fast Delivery</p>
            <p>Free Delivery For All Order Over $140</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LowerPart
