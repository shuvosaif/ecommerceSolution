import React from 'react'
import barLogo from '../../assets/icon/Ellipse_8.svg'
import rightArrow from '../../assets/icon/Vector.svg'
import leftArrow from '../../assets/icon/Vector_(1).svg'
import catFeed from '../../assets/image/catfeed.svg'
import favouriteLogo from '../../assets/icon/Vector_(2).svg'
import quickView from '../../assets/icon/QuickView.svg'
import ratingStar from '../../assets/icon/Vector_(3).svg'
import camera from '../../assets/image/eos-250d-03-500x5001.svg'
import creame from '../../assets/image/curology.svg'
import laptop from '../../assets/image/ideapad-gaming-3i-01-500x5001.svg'
import car from '../../assets/image/New-Mercedes-Benz.svg'
import sportsBoot from '../../assets/image/sports_boot.svg'
import gamePad from '../../assets/image/gamepad.svg'
import jacket from '../../assets/image/satin-jacket.svg'

const FlashOurProduct = () => {
  return (
    <div className='container pt-36'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        {/* upperpart with time & left right */}
        <div className='flex flex-col lg:flex-row  items-center gap-20'>
          {/* text & Time */}
          <div>
            {/* Text */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
              {/* Today */}
              <div className='w-5 h-10 bg-red-600 rounded-lg'></div>
              <div className='text-red-500'> Our Products</div>
            </div>
            <div className='text-[36px]'>Explore Our Products</div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-2'>
          {/* Button left & Right */}
          <img
            src={leftArrow}
            className='bg-gray-100 rounded-full border-1  p-2'
          />

          <img
            src={rightArrow}
            className='bg-gray-100 rounded-full border-1  p-2'
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-14'>
        <div className='flex flex-col w-3/12  '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={catFeed}
                className=' mx-auto items-center w-full m-10 h-44 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>HAVIT HV-G92 Gamepad</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$120</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$160</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12 '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={camera}
                className=' mx-auto items-center w-full m-10 h-32 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div className='w-full bg-black text-white flex flex-row justify-between items-center h-12'>
              <p className=' pl-20'>Add to cart</p>
            </div>
            <div>
              {/* Text */}
              <p>AK-900 Wired Keyboard</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$960</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$1160</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12  '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={laptop}
                className=' mx-auto items-center w-full m-10 h-44'
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>S-Series Comfort Chair </p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$375</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$400</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12 '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={creame}
                className=' mx-auto items-center w-full m-10 h-44 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>IPS LCD Gaming Monitor</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$370</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$460</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-14'>
        <div className='flex flex-col w-3/12  '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={car}
                className=' mx-auto items-center w-full m-10 h-44 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>HAVIT HV-G92 Gamepad</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$120</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$160</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12 '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={sportsBoot}
                className=' mx-auto items-center w-full m-10 h-32 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div className='w-full bg-black text-white flex flex-row justify-between items-center h-12'>
              <p className=' pl-20'>Add to cart</p>
            </div>
            <div>
              {/* Text */}
              <p>AK-900 Wired Keyboard</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$960</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$1160</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12  '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={gamePad}
                className=' mx-auto items-center w-full m-10 h-44'
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>S-Series Comfort Chair </p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$375</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$400</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-3/12 '>
          {/* Lowerpart With card */}
          <div className='bg-gray-200 flex flex-col lg:flex-row'>
            {/* photo */}
            <div className='w-full p-1'>
              <img
                src={jacket}
                className=' mx-auto items-center w-full m-10 h-44 '
              />
            </div>
            {/* Icon */}
            <div className=' w-1/3 mt-2 flex flex-col gap-2'>
              <div>
                <img
                  src={favouriteLogo}
                  className='bg-white rounded-full border-1 p-2 '
                />
              </div>
              <div>
                <img
                  src={quickView}
                  className='bg-white rounded-full border-1 p-2'
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              {/* Text */}
              <p>IPS LCD Gaming Monitor</p>
            </div>
            <div className='flex flex-row gap-2'>
              {/* price */}
              <div>
                <p>$370</p>
              </div>
              <div>
                <p className='line-through text-gray-300'>$460</p>
              </div>
            </div>
            <div className='flex flex-row gap-8'>
              {/* rating */}
              <div className='flex flex-row'>
                <img src={ratingStar} />
                <img src={ratingStar} />
                <img src={ratingStar} />
              </div>
              <div>(88)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-10 flex justify-center items-center'>
        <button className='bg-red-500 text-white rounded-lg px-10 py-5 '>
          View All Products
        </button>
      </div>
    </div>
  )
}

export default FlashOurProduct
