import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton'

export default function NavBar() {
  return (
    <nav className="py-4 px-8 bg-base-nav ">
        <div className='max-w-4xl flex justify-between items-center mx-auto'>
            <div className="flex justify-between gap-2 w-3/5 ">
            <Link to="/home" className="flex items-center ">
                <FaHome className="mr-1" /> Home
                </Link>
                <Link to="/organize" className="flex items-center ">
                <IoPeople className="mr-1" /> Organize
                </Link>
                <Link to="/budget" className="flex items-center ">
                <FaRupeeSign className="mr-1" /> Budget Track
                </Link>
                <Link to="/planning-tools" className="flex items-center">
                <FaTools className="mr-1" /> Planning Tools
                </Link>
            </div>
            <LoginButton />
      </div>
    </nav>
  )
}
