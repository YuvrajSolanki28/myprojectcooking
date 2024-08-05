import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import { GoHomeFill } from "react-icons/go";
import {FaUserFriends} from 'react-icons/fa'
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { MdHelp } from 'react-icons/md'

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false)

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Cooking <span className='font-bold'>BOB</span>
        </h1>
      </div>

      {/* Search Input */}
      {!isLoginPage && (
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      )}

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <button onClick={()=>navigate("/")} className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><GoHomeFill size={25} className='mr-4' /> Home</button>
                <button className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><MdHelp size={25} className='mr-4' /> Help</button>
                <button className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><AiFillTag size={25} className='mr-4' /> Promotions</button>
                <button className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</button>
                <button className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><FaUserFriends size={25} className='mr-4' /> Invite Friends</button>
                <button onClick={()=>navigate("/login")} className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><IoLogIn  size={25} className='mr-4' /> Login</button>
                <button className='text-xl py-4 flex cursor-pointer hover:bg-slate-300 rounded-full px-2'><IoLogOut  size={25} className='mr-4' /> LogOut</button>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
