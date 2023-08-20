
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DropDown from './DropDown';
// import { firstname } from '../../../Backend/controllers/userController';
// import {firstname} from './Login';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[OpenProfile,setOpenProfile]=useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Get the current location to apply the "active" class to the active link
  const location = useLocation();

  return (
    <header className="bg-[#a86add]">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-auto flex-shrink-0">
              <NavLink to="/home" className="text-white text-xl">My Diary</NavLink>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="ml-4 flex items-center md:ml-6 relative">
              <div className="ml-10 flex items-baseline space-x-4 flex items-right">
                <NavLink to="/home"className="text-white  hover:bg-[#9338e4] px-3 py-2 rounded-md text-md font-medium" activeClassName="active">Home</NavLink>
                <NavLink to="/About" className="text-white  hover:bg-[#9338e4] px-3 py-2 rounded-md text-md font-medium" activeClassName="active">About</NavLink>
                <NavLink to="/Contact"className="text-white  hover:bg-[#9338e4] px-3 py-2 rounded-md text-md font-medium"activeClassName="active">Contact</NavLink>
                <NavLink to="/Compose"className="text-white  hover:bg-[#9338e4] px-3 py-2 rounded-md text-md font-medium"activeClassName="active">Compose</NavLink>
                <label className="text-black font-bold px-3 py-2 rounded-md text-lg cursor-pointer" onClick={()=>setOpenProfile((prev)=>!prev)}>{"Hi, "+localStorage.getItem("firstname")}</label>
                {/* <label>{firstname}</label> */}
              </div>
            </div>
          </div>
          {OpenProfile && <DropDown/>}
         
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[] focus:outline-none focus:bg-[#923bdf] focus:text-white transition duration-150 ease-in-out"
              aria-label= {isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <NavLink exact to="/home"
                className="block text-white hover:bg-[#9338e4]  px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block text-white hover:bg-[#9338e4]  px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-white hover:bg-[#9338e4]  px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Contact
              </NavLink>
              <NavLink
                to="/compose"
                className="block text-white hover:bg-[#9338e4]  px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Compose
              </NavLink>
              {/* <label>{firstname}</label> */}
              <NavLink
                to="/"
                className="text-black text-md font-bold px-3 py-2 rounded-md cursor-pointer"
                activeClassName="active"
              >
                Logout
              </NavLink>
              {/* <label className="t" onClick={()=>setOpenProfile((prev)=>!prev)}>{"Hi, "+localStorage.getItem("firstname")}</label> */}
             
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

