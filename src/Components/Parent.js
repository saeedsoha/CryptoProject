import React from 'react'
import Props from './Props'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from '../NavTest/NavBar'


function Parent() {

  return (
    <>
      <BrowserRouter>
      <Props/>
        <NavBar/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    
    </>
   )
}

export default Parent