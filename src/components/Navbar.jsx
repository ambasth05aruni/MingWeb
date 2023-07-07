import React from 'react'
import logo from '../assets/minglogo.jpg'
import {FiSearch} from "react-icons/fi"
import {Link } from 'react-router-dom'

const Navbar = () => {
   
  return (
    <div className='flex justify-between items-center w-full h-16   px-4
    text-white bg-black sticky'>
      <div>
        <img className='h-12 mx-2' src={logo} alt="" />
      </div>
    <ul className='flex'>
<li className='px-6 cursor-pointer capitalize font-medium text-xl hover:scale-105 duration-200'>
<Link to="/">Home</Link>
</li>
<li className='px-6 cursor-pointer capitalize font-medium text-xl hover:scale-105 duration-200'>
<Link to="/stream">Stream</Link>
  {/* Stream */}
  </li>
<li className='px-6 cursor-pointer capitalize font-medium text-xl hover:scale-105 duration-200'>
<Link to="/promote">Promote</Link>
  {/* Promote */}
  </li>
<input className='bg-gray-900 p-0.5' type="text" placeholder='search....' />
<li className='px-6 cursor-pointer capitalize font-medium text-xl hover:scale-105 duration-200'>
<Link to="/blog">Blog</Link>
  </li>
    </ul>


    </div>
  )
} 

export default Navbar
