import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user=auth.currentUser
  // console.log('header',user)
const navigate=useNavigate()
  const handleSignout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error.message)
});
  }

  return (
    <div className='absolute px-6 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        {user && (
        <div className='m-4'>
          <button onClick={handleSignout} className='bg-red-500 text-white font-semibold rounded-md p-1 px-2'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header