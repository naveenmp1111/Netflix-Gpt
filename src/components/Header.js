import React from 'react'

const Header = () => {
  return (
    <div className='absolute px-6 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        <div className='m-4'>
          <button className='bg-red-500 text-white font-semibold rounded-md p-1'>Sign Out</button>
        </div>
    </div>
  )
}

export default Header