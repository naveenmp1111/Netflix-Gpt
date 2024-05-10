import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch=useDispatch()
    const [signIn, setSignIn] = useState(true)
    const [errMessage, setErrMessage] = useState(null)
    const toggleForm = () => {
        setSignIn(!signIn)
    }
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    console.log('checking if name is present',name)

    const validateData = async() => {
        const message = name.current ?  checkValidData(email.current.value, password.current.value, name.current.value) : checkValidData(email.current.value, password.current.value)
        setErrMessage(message)
        //    console.log(message)
        // console.log(name.current.value)
        if (message) return
        if (!signIn) {
            //signUp
            console.log('woohoo')
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    console.log(userCredential)
                    const user = userCredential.user;
                    // ...







                    

updateProfile(user, {
  displayName: name.current.value
}).then(() => {
  // Profile updated!
  const {uid,displayName,email}=auth.currentUser
  dispatch(addUser({uid,displayName,email}))
  console.log('Profile updated')
  // ...
}).catch((error) => {
  // An error occurred
  console.log(error.message)
  // ...
});









                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setErrMessage(errorMessage)
                    // ..
                });
        } else {
            //signIn
            console.log('yeeeheeeh')
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)

                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                    setErrMessage(errorMessage)

                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="Background Image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='p-12 absolute my-36 mx-auto left-0 right-0 bg-black w-3/12 bg-opacity-80'
            >
                <h1 className='text-white font-bold my-4 text-3xl'>{signIn ? 'Sign in' : 'Sign Up'}</h1>
                {!signIn && <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85 text-white'
                    type="text"
                    placeholder='Name'
                    ref={name}
                />}
                <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85  text-white'
                    type="text"
                    placeholder='Email'
                    ref={email}
                />
                <input
                    className='w-full my-4 p-4 rounded-md bg-gray-700 bg-opacity-85 text-white'
                    type="password"
                    placeholder='Password'
                    ref={password}
                />
                <p className='text-red-600 text-lg font-semibold'>{errMessage}</p>
                <button
                    className='w-full my-6 p-4 text-white bg-red-600 rounded-md' onClick={validateData}
                >{signIn ? 'Sign In' : 'Sign Up'}</button>

                <p className='my-4 text-white cursor-pointer' onClick={toggleForm}>
                    {signIn ? 'New User ? Sign Up' : 'Already a User ? Sign In'}
                </p>
            </form>
        </div>

    )
}

export default Login