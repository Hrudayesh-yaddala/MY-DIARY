import backImage from "../Images/background.webp";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";

const Entries = () => {
  const [diary, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found.");
        return;
      }

      const response = await axios.get(
        "https://busy-rose-moth-vest.cyclic.cloud/api/user/entries",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      // console.log(response.data);

      if (response.status === 200) {
        console.log(diary);
        setEntries(response.data.entries);
        // toast.success("Entries fetched successfully");
        console.log(diary);
      }
      if (response.status === 500) {
        toast.failure("Internal Server Error");
      } else {
        console.error("Unexpected response:", response.status, response.data);
      }
    } catch (error) {
      console.log("Error fetching entries:", error);
    }
  };
  const handleDeleteEntry = async (id) => {
    try {
      const response = await axios.delete(
        `https://busy-rose-moth-vest.cyclic.cloud/api/user/entries/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchEntries();
      }
      if (response.status === 500) toast.failure("Internal Server Error");
    } catch (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry");
    }
  };

  return (
    <div
      className="bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat pt-5"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-3xl font-semibold mb-2 text-center top-5 text-black ">
            {localStorage.getItem("firstname") + "'s" + " " + "Journal"}
          </h1>
          <div className="flex flex-col my-3">
            <Link
              className="px-2 py-2 text-white text-lg bg-purple-300 rounded hover:bg-purple-400 mr-2 sm:text-base lg:text-lg place-self-end w-fit"
              to={"/compose"}
            >
              + NEW ENTRY
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">S.NO</th>
                <th className="border p-2">Entry</th>
                <th className="border p-2">Date Created</th>
                <th className="border p-2">View</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {diary?.map((entry, index) => (
                <tr key={entry._id}>
                  <td className="border p-3">{index + 1}</td>
                  <td className="border p-3">
                    {entry?.comment.length > 55
                      ? `${entry?.comment.substring(0, 55)}...`
                      : entry?.comment}
                  </td>
                  <td className="border p-3">
                    {new Date(entry?.date).toLocaleDateString()}
                  </td>
                  <td className="border p-3">
                    <Link
                      to={`/entries/${entry?._id}`} // Assuming /entries/:id is the route for individual entry
                      className="px-3 py-2 text-white text-sm bg-purple-300  rounded hover:bg-purple-400 mr-2 sm:text-base lg:text-sm"
                    >
                      VIEW
                    </Link>
                  </td>
                  <td className="border">
                    <button onClick={() => handleDeleteEntry(entry?._id)}>
                      <MdDelete className="text-red-500 hover:scale-110 ease-in-out text-xl hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>
    </div>
  );
};

export default Entries;
