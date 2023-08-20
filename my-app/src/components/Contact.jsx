import bgImage from '../Images/bgimage.jpg';
import { React,useState } from 'react';
import axios from 'axios';
import backImage from '../Images/background.jpg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    name : "",
    email : "",
    message : ""
  })
  const handleChange = (e) => {
    setData({...data,[e.target.name] : e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("https://busy-rose-moth-vest.cyclic.cloud/api/user/contact",data,{
        headers : {
          'Content-type' : 'application/json'
        }
        })
        console.log(response)
        toast.success(response.data.message)
        if(response.status===400) toast.error("Fill all details");
        if(response.status === 200)
        {
          toast.success("Thank you for taking the time to contact us");
           setTimeout(()=>{
            navigate("/home");
          },3000)
          
        }
        if(response.status===500) toast.error("Internal server error");

    }
    catch(err){
      console.log(err)
      toast.error(err.response.data.message)
    }
  }

  return (
    <section className="text-black body-font relative hover:bg-startImage focus:bg-startImage  bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backImage})` }}>
      <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-300 h-96 overflow-hidden mb-8 lg:mb-0">
          <iframe
            title="map"
            className="w-full h-full"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            // src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Guntur%2C%20Nehru%20Nagar&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          {/* <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-sm text-white font-medium">ADDRESS</h2>
            <p className="text-sm text-white">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div> */}
        </div>
        <div className="lg:w-5/12 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8">
          <h1 class="mb-12 pb-4 text-center text-5xl font-bold relative">Feedback
  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black"></div>
</h1>
          <h5 className="leading-relaxed mb-5 text-black text-center text-lg">
            Any questions or remarks? Just write us a message
          </h5>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-md text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
               className="w-full bg-transparent rounded border border-gray-600 focus:border-gray-1000 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            //   className={`w-full h-48 p-2  bg-transparent resize-none border border-gray-300 rounded ${fontFamily} text-${fontSize} text-${textAlign}`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full bg-transparent rounded border border-gray-600 focus:border-indigo-1000 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-md text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="w-full bg-transparent rounded border border-gray-600 focus:border-indigo-1000 focus:ring-2 focus:ring-purple-500 h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-[#a86add] border-0 py-2 px-6 focus:outline-none hover:bg-[#9338e4] rounded text-xl w-full" onClick={handleSubmit}>
            Submit
          </button> 
          {/* <input type="submit" value="Submit" className="text-white bg-[#a86add] border-0 py-2 px-6 focus:outline-none hover:bg-[#9338e4] rounded text-xl w-full" /> */}
          <p className="text-md text-white font-bold mt-3 text-center">
          Feel free to reach out to us anytime. We're here to assist you
          </p>
        </div>
      </div>
      <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>
    </section>
  );
};

export default Contact;
