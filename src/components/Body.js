import React, { useEffect } from 'react'
import Login from './Login'
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{

    


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,displayName,email}=user
    dispatch(addUser({uid,displayName,email}))
    navigate('/browse')
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser())
    navigate('/')
  }
});

  },[])

  return (
    
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/browse' element={<Browse/>}/>
    </Routes>
   
    
  )
}

export default Body