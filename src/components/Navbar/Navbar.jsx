import React from 'react'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-red-600 text-white">

      <div className="flex items-center space-x-6">
        
        <div className="font-bold text-lg">
          <img src={Logo} alt="" />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">About</a></li>
          <li><a href="#" className="hover:text-blue-300">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-300">Clients</a></li>
          <li><a href="#" className="hover:text-blue-300">Blog</a></li>
          <li><a href="#" className="hover:text-blue-300">Content</a></li>
        </ul>
      </div>

      <button className="px-4 py-2 bg-Yellow-500  hover:bg-yellow-400">
        BOOK A TABLE
      </button>
    </nav>
  )
}

export default Navbar