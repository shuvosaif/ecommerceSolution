import React from 'react'
import barLogo from '../../assets/icon/Ellipse_8.svg'

const FlashToday = () => {
  return (
    <div className='container pt-10'>
      <div>
        {/* upperpart with time & left right */}
        <div className='flex flex-col lg:flex-row  items-center gap-10'>
          {/* text & Time */}
          <div>
            {/* Text */}
            <div className='flex flex-col lg:flex-row items-center gap-4'>
              {/* Today */}
              <div className='w-5 h-10 bg-red-600 rounded-lg'></div>
              <div> Today's</div>
            </div>
            <div className='text-[36px]'>Flash Sales</div>
          </div>
          <div className='flex flex-row'>
            {/* Time */}
            <div>
              {/* Days */}
              <div>Days</div>
              <div className='text-[36px]'>03</div>
            </div>
            <div >:</div>
            <div>
              {/* Hours */}
              <div>Hours</div>
              <div className='text-[36px]'>23</div>
            </div>
            <div>:</div>
            <div>
              {/* Minutes */}
              <div>Minutes</div>
              <div className='text-[36px]'>19</div>
            </div>
            <div>:</div>
            <div>
              {/* Seconds */}
              <div>Seconds</div>
              <div className='text-[36px]'>56</div>
            </div>
          </div>
        </div>
        <div>
          {/* Button left & Right */}
          <img />
          <img />
        </div>
      </div>
      <div>{/* Lowerpart With card */}</div>
    </div>
  )
}

export default FlashToday
