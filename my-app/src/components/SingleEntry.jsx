import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import backImage from '../Images/background.webp';
const SingleEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetchEntry();
  }, []);

  

  const fetchEntry = async () => {
    try {
      const response = await axios.get(`https://busy-rose-moth-vest.cyclic.cloud/api/user/entries/${id}`);
      if(response.status===200){
      setEntry(response.data.entry);
      toast.success("Entry fetched Successfully")
      }
      if(response.status===404) toast.failure("Entry Not Found")
      if(response.status===500) toast.failure("Internal Server Error");
    } catch (error) {
      console.log("Error fetching entry:", error);
    }
  };

  if (!entry) {
    toast.success("Loading....");
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-grow text-left hover:bg-backImage focus:bg-startImage bg-cover bg-center bg-no-repeat bg-gray-100" style={{ backgroundImage: `url(${backImage})` }}>
  <h1 className="text-3xl font-semibold mb-6 text-center">Entry Details</h1>
  <div className="bg-transparent p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">{new Date(entry.date).toLocaleDateString()}</h2>
    {/* <button onClick={() => handleDeleteEntry(entry._id)} className="text-red-600"><FontAwesomeIcon icon={faTrash} /></button> */}
    <p className="mb-4">{entry.comment}</p>
    <div className="flex flex-wrap gap-4">
      {entry.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-64 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48 object-cover"
        />
      ))}
    </div>
  </div>
  <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>
</div>

  );
};

export default SingleEntry;
