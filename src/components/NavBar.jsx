import React from 'react';
import { FaHome, FaBookmark, FaTools, FaSignOutAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';

export default function NavBar() {
  const navigate = useNavigate(); // For navigation
  const isLoggedIn = localStorage.getItem('token') !== null; // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    console.log("User logged out successfully");
  };

  const handleProtectedNavigation = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate('/login');
      console.log("User is not logged in, redirected to login.");
    } else {
      navigate(path); // Navigate to the intended path if logged in
    }
  };

  return (
    <nav className="py-4 px-8 bg-[#f6f6f6] sticky top-0 shadow-lg z-20 w-full">
      <div className="max-w-4xl flex justify-between items-center mx-auto flex-row-reverse">
        {/* Authentication Section */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-base-but"
              aria-label="Logout"
            >
              <FaSignOutAlt className="ml-1" /> Logout
            </button>
          ) : (
            <Link to="/login" aria-label="Login Page">
              <LoginButton />
            </Link>
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex justify-between gap-4 w-3/5 flex-row-reverse">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center"
                : "flex items-center text-gray-700 hover:text-blue-500"
            }
            aria-label="Wishlist Page"
          >
            <FaBookmark className="ml-1" /> Wishlist
          </NavLink>
          <a
            href="/planning-tools"
            onClick={(e) => handleProtectedNavigation(e, "/planning-tools")}
            className="flex items-center text-gray-700 hover:text-blue-500"
            aria-label="Planning Tools Page"
          >
            <FaTools className="ml-1" /> Planning Tools
          </a>
          <NavLink
            to="/organize"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center"
                : "flex items-center text-gray-700 hover:text-blue-500"
            }
            aria-label="Organize Page"
          >
            <IoPeople className="ml-1" /> Organize
          </NavLink>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center"
                : "flex items-center text-gray-700 hover:text-blue-500"
            }
            aria-label="Home Page"
          >
            <FaHome className="ml-1" /> Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
