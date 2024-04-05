import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signIn,setSignIn]=useState(true)
    const toggleForm=()=>{
        setSignIn(!signIn)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="Background Image" />
            </div>
            <form
                className='p-12 absolute my-36 mx-auto left-0 right-0 bg-black w-3/12 bg-opacity-80'
            >
                <h1 className='text-white font-bold my-4 text-3xl'>{signIn?'Sign in':'Sign Up'}</h1>
                {!signIn && <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85 '
                    type="text"
                    placeholder='Name'
                />}
                <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85 '
                    type="text"
                    placeholder='Email'
                />
                <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85'
                    type="text"
                    placeholder='Password'
                />
                <button
                    className='w-full my-6 p-4 text-white bg-red-600 rounded-md'
                >{signIn ? 'Sign In':'Sign Up'}</button>
                <p className='my-4 text-white cursor-pointer' onClick={toggleForm}>
                    { signIn ? 'New User ? Sign Up' :'Already a User ? Sign In'}
                </p>
            </form>
        </div>

    )
}

export default Login