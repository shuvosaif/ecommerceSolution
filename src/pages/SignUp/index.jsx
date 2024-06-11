import React from 'react'
import SideImage from './components/SideImage'
import SignupForm from './components/SignupForm'

const SignUp = () => {
  return (
    <>
      <div className='  grid grid-cols-12'>
        <div className='col-span-6 '>
          <SideImage />
        </div>
        <div className='container col-span-6 flex flex-col justify-center items-center  '>
          <SignupForm />
        </div>
      </div>
    </>
  )
}

export default SignUp
