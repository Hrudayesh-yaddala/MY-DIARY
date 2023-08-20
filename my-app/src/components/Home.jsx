import homebg from "../Images/home.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <div className="flex justify-center items-center relative h-screen">
        <div className=" bg-[#9b44e7] bg-opacity-70 rounded-lg flex flex-col gap-5 justify-center absolute items-center p-6 md:p-10">
          <div>
            <h1 className="font-bold text-xl">{localStorage.getItem("firstname")}&apos;s Journal</h1>
          </div>
          <div>
            <Link
              className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 m-2 sm:text-base lg:text-lg"
              to={"/compose"}
            >
              New Entry
            </Link>
            <Link
              className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg"
              to={"/entries"}
            >
              View all Entries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

{
  /* <div className="flex justify-center items-center h-screen bg-gray-100">
<div className="relative w-1/4 bg-blue-200 p-8 rounded-l-lg">
  <h1 className="text-2xl font-bold mb-4">Diary</h1>
  <div className="flex space-x-4">
    <button className="py-2 px-4 bg-blue-500 text-white rounded">New Entry</button>
    <button className="py-2 px-4 bg-blue-500 text-white rounded">View All Entries</button>
    <button className="py-2 px-4 bg-blue-500 text-white rounded">Journal Settings</button>
  </div>
</div>
</div> */
}
