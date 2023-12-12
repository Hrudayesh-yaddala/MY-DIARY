import React, { useState } from 'react';
import { useNavigate,Link} from "react-router-dom";
import bgImage from '../Images/bgimage.webp';
// import backImage from '../Images/background.webp';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";


const Login = () => {
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email : "",
    password : ""
  })

   // spinner
   const load = () => {
    return (
      <div className={`flex justify-center items-center h-screen ${loading ? 'block' : 'hidden'}`}>
        <div className="bg-white p-5 rounded-lg">
          <BeatLoader loading={loading} className="text-cyan-900 text-3xl" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true)
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
    finally{
      setLoading(false)
    }
    
  };
  

  return (
    <div>
      {loading ? load(): (
        <div>
        <div className="p-4 bg-cover bg-center h-screen  bg-purple-200 flex-grow">
          {/* style={{ backgroundImage: `url(${backImage})` }} */}
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
              className=" text-white rounded px-4 py-2 mb-4 w-full md:w-80 lg:w-96 bg-purple-400 hover:bg-purple-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-center">Dont have an account? <Link to="/Register" className="text-purple-800 hover:text-[#9338e4]">Sign-up here</Link></p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Login;


