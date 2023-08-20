import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import bgImage from '../Images/bgimage.jpg';
import backImage from '../Images/background.jpg';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:3000/api/user/login",formData,{
        headers : {
          'Content-type' : 'application/json'
        }
      })
      console.log(response);  
      toast.success(response.data.message)
      if(response.status===400) toast.error("Fill all details");
      else if(response.status===200){
        console.log("entered successfully")
        const { message, firstname } = response.data;
        toast.success(`${message}. Welcome, ${firstname}!`);
        // toast.success("Redirecting to home");
        localStorage.setItem("token",response.data.accessToken)
        localStorage.setItem("firstname",response.data.firstname)
        setTimeout(()=>{
          navigate("/home");
        },1000)
      }
      else if(response.status===401) toast.error("Invalid Credentials");
      else if(response.status===404) toast.error("User Not Found");
      if (response.status===500) toast.error("Internal Server Error");
      // else toast.error("Internal server error");
    }
    catch(err){
      console.log(err);
      toast.error(err.response.data.message);
    }
    
  };
  

  return (
    <div className="p-4 hover:bg-startImage focus:bg-backImage  bg-cover bg-center bg-no-repeat flex-grow"
    style={{ backgroundImage: `url(${backImage})` }}>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96 "
          // required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-400 rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96"
          // required
        />
        <button
          type="submit"
          className="bg-[#a86add] text-white rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96  hover:bg-[#9338e4]"
        >
          Sign In
        </button>
      </form>
      <p className="text-center">Dont have an account? <a href="/Register" className="text-purple-800 hover:text-[#9338e4]">Sign-up here</a></p>
    </div>
  );
};

export default Login;


