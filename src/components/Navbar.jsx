import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center font-kanit'>
       <Link to={'/'}>
          <div className="flex items-end  gap-1">
             <img src={logo} className='' width={170} alt="logo" />
          </div>
       </Link>
       
       <div className=" flex gap-8 items-center ">
       <Link
         to={`/`}
         className="font-kanit font-semibold scale-110 tracking-wide cursor-pointer"
         style={{
         background: 'linear-gradient(to right, #9333EA, #2C80FE)',
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent', 
         textDecoration: 'none',
         display: 'inline-block'
           }}>
        Home
       </Link>
       
          <Link to={`/`} className=' font-kanit tracking-wide cursor-pointer text-black/70'>
             About
          </Link>
          <Link to={`/`} className=' font-kanit tracking-wide cursor-pointer text-black/70'>
             Contact
          </Link>
          <Link to={`/`} className=' font-kanit tracking-wide cursor-pointer text-black/70'>
             Blog
          </Link>
       </div>
       
       <div className=" flex gap-4 items-center">
          <Link to={`/`} className=" font-kanit tracking-wide cursor-pointer text-black/80">
            Login
          </Link>
          <Link
                to={`/`}
                className='font-kanit tracking-wide rounded-full px-10 py-1'
                style={{
                  background: 'linear-gradient(to right, #9333EA, #2C80FE)',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-block'
                }} >
                   Register
          </Link>

       </div>
    </div>
  )
}

export default Navbar
