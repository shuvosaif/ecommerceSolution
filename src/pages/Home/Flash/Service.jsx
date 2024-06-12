import React from 'react'
import deliveryLogo from '../../assets/icon/Services.svg'
import contactLogo from '../../assets/icon/Services(1).svg'
import guaranteeLogo from '../../assets/icon/Services(2).svg'

const Service = () => {
  return (
    <div className='container pt-36'>
      <div className='grid grid-cols-12 grid-rows-12 m-5 gap-10'>
        <div className='col-span-4 row-span-6 flex flex-col justify-center items-center'>
          <img src={deliveryLogo} alt='' />
          <div className='mt-2 mx-auto'>
            <h2 className='text-[28px]'>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className='col-span-4 row-span-6 flex flex-col justify-center items-center'>
          <img src={contactLogo} alt='' />
          <div>
            <h2 className='text-[28px]'>24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className='col-span-4 row-span-6 flex  flex-col justify-center items-center'>
          <img src={guaranteeLogo} alt='' />
          <div>
            <h2 className='text-[28px]'>MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
