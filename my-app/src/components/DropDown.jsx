// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const DropDown = () => {
//   const handleLogout=()=>{
//     localStorage.removeItem("token");
//     localStorage.removeItem("firstname");
//     window.location.reload();
  
//   }
//   const dropDownStyle = {
//     position: 'absolute',
//     top: '3.7rem',
//     right: '1.5rem',
//     width: '100px',
//     padding: '15px',
//     borderRadius: '8px',
//     backgroundColor: 'white',
//     border: '1px solid gray',
//   };

//   const arrowStyle = {
//     content: '',
//     position: 'absolute',
//     top: '-0.7rem',
//     right: '1.1rem',
//     width: '20px',
//     height: '20px',
//     transform: 'rotate(45deg)',
//     backgroundColor: 'white',
//     borderLeft: '1px solid gray',
//     borderTop: '1px solid gray',
//   };

//   return (
//     <div style={dropDownStyle} className="flex flex-col">
//       <div style={arrowStyle}></div>
//       <ul className="flex flex-col gap-4">
//         <li>Account</li>
//         <li>Settings</li>
//         <li className='cursor-pointer' onClick={handleLogout}>Logout</li>
//       </ul>
//     </div>
//   );
// };

// export default DropDown;


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



