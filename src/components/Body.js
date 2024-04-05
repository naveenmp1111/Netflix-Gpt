import React from 'react'
import Login from './Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/browse' element={<Browse/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Body