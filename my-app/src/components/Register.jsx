import backImage from "../Images/background.jpg";
import { useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    setData({...data,[e.target.name] : e.target.value})
  }
  const [confirmpassword,setConfirmPassword] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(data.password !== confirmpassword)
    {
      toast.error("Both passwords should be same")
    }
    else{
      console.log(data)
      try{
        const response = await axios.post("http://localhost:3000/api/user/register",data,{
        headers : {
          'Content-type' : 'application/json'
        }
        })
        console.log(response)
        toast.success(response.data.message)
        if(response.status === 200)
        {
          toast.success("Redirecting to login")
           setTimeout(()=>{
            navigate("/login");
          },2000)
          
        }
      }
      catch(err)
      {
        console.log(err)
        toast.error(err.response.data.message)
      }
    }
    

  }
  return (
    <div
      className="p-4 hover:bg-startImage focus:bg-backImage  bg-cover bg-center bg-no-repeat flex-grow"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6">
        Welcome to e-diary! <br />
        Let&apos;s create your free account.
      </h1> 
      <form className="flex items-center justify-center flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="firstname">FirstName</label>
          <input className="p-2 border border-gray-500 rounded-md" type="text" name="firstname" id="firstname" onChange={handleChange}/>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="lastname">lastName</label>
          <input className="p-2 border border-gray-500 rounded-md" type="text" name="lastname" id="lastname" onChange={handleChange}/>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-500 rounded-md" type="email" name="email" id="firstname" onChange={handleChange}/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-500 rounded-md" type="password" name="password" id="password" onChange={handleChange}/>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="confirmpassword">Confirm password</label>
          <input className="p-2 border border-gray-500 rounded-md" type="password" name="confirmpassword" id="confirmpassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>

        <button type="submit" className="bg-[#a86add] text-white rounded px-4 py-2 mb-4 w-full md:w-72 lg:w-52  hover:bg-[#9338e4]">Register</button>
      </form>
      <p className="text-center mt-5">
        Already have an account?{" "}
        <a href="/login" className="text-purple-900 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
