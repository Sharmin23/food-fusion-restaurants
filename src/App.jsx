import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import home from './pages/home'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path ='/' element ={<home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
