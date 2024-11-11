import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path ='/' element ={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
