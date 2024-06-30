import React from 'react'
import CellPhone from '../../../assets/icon/icons-phone.svg'
import Mail from '../../../assets/icon/icons-mail.svg'

const SideBar = () => {
  return (
    <div className=''>
      <div>Home / Contact</div>
      <div className='flex flex-row justify-between items-center gap-10'>
        <div className='box-border shadow-lg w-1/3 p-5 my-10 '>
          <div className='px-7 py-5'>
            <div>
              <div className='flex flex-row justify-start items-center gap-5'>
                <img src={CellPhone} alt='' />
                <p className='font-bold'>Call To Us</p>
              </div>
              <div className='py-5'>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>
            <hr></hr>
            <div className='my-3'>
              <div className='flex flex-row justify-start items-center gap-5'>
                <img src={Mail} alt='' />
                <p className='font-bold'>Write To Us</p>
              </div>
              <div className='py-5'>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: support@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='box-border shadow-lg w-2/3 p-5 my-10'>
          <div className='px-5 py-5'>
            <div className='flex flex-row justify-between items-center gap-3 bg-yellow-500 p-1 '>
              <div>
                <input
                  className='bg-gray-200 rounded-md py-2 w-full'
                  placeholder='Enter Your Email '
                ></input>
              </div>
              <div>
                <input
                  className='bg-gray-200 rounded-md py-2 w-full'
                  placeholder='Enter Your  Phone'
                ></input>
              </div>
              <div>
                <input
                  className='bg-gray-200 rounded-md py-2 w-full'
                  placeholder='Enter Your  Address'
                ></input>
              </div>
            </div>

            <div className='mt-5 w-full bg-green-500 p-1'>
              <textarea
                className='bg-gray-200 rounded-md w-full '
                placeholder='Enter Your  Message'
                rows={8}
              ></textarea>
            </div>

            <div className='flex flex-row justify-end items-center'>
              <button className='bg-red-500 text-white rounded-md p-2 mt-5'>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
