
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const DropDown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    toast.success("You have been logged out !");
    setTimeout(()=>{
    navigate("/");
    },2000)
    // navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div className="absolute top-14 right-7 w-32 p-2 bg-white rounded-lg shadow-md z-10">
      <div className="absolute top-0 right-2 w-10 h-8 transform rotate-45 bg-white border-t border-r border-gray-300"></div>
      <ul className="flex flex-col gap-2 text-gray-700">
        <li>Account</li>
        <li>Settings</li>
        <li className=" cursor-pointer" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default DropDown;



