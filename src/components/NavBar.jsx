import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";
import LoginButton from './LoginButton'

export default function NavBar() {
  return (
    <nav className="py-4 px-8 bg-[#f6f6f6] sticky top-0 shadow-lg z-10">
      <div className='max-w-4xl flex justify-between items-center mx-auto'>
        <div className="flex justify-between gap-2 w-3/5 ">
          <Link to="/home" className="flex items-center ">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/organize" className="flex items-center ">
            <IoPeople className="mr-1" /> Organize
          </Link>
          <Link to="/planning-tools" className="flex items-center ">
            <FaRupeeSign className="mr-1" /> Planning Tools
          </Link>
          <Link to="/wishlist" className="flex items-center">
            <FaBookmark className="mr-1" /> WishList
          </Link>
        </div>
        <LoginButton />
      </div>
    </nav>
  )
}
