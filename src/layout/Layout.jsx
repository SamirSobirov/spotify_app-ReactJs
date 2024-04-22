import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import ProfileMenu from "../components/ProfileMenu";
import { GrInstallOption } from "react-icons/gr";

export default function Layout({ children }) {
  return (
    <>
      <header className="w-full flex justify-between items-center pl-[340px] pr-10 py-5">
        <div className="flex items-center gap-1">
          <button className="bg-[#131313] rounded-full p-2 ">
            <MdOutlineKeyboardArrowLeft size={24} color="white" />
          </button>
          <button className="bg-[#131313] rounded-full p-2 ">
            <MdOutlineKeyboardArrowRight size={24} color="white" />
          </button>
        </div>
        <ProfileMenu />
      </header>
      <aside className="w-[300px] bg-black px-2.5 py-8 fixed top-0 left-0 bottom-0 flex flex-col items-start gap-7">
        <img src="/icons/big-logo.svg" alt="logo" className="pl-6" />
        <nav>
          <ul>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5 px-6 ">
              <AiFillHome size={26} />
              <span className="text-lg font-bold">Home</span>
            </li>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6">
              <CiSearch size={26} />
              <span className="text-lg font-bold">Search</span>
            </li>
            <li className="cursor-pointer text-white flex items-center justify-start gap-5  px-6">
              <BiLibrary size={26} />
              <span className="text-lg font-bold">Library</span>
            </li>



            <div className="mt-[15%]">
              <button className="cursor-pointer text-white flex items-center justify-start gap-5 px-6">
              <img
                  src="./images/create_img.svg"
                  alt=""
                  className="w-[26px] bg-white"
                />
                <span className="text-lg font-bold">Create Playlist</span>
              </button>

              <button className="rounded-3xl cursor-pointer text-white flex items-center justify-start mt-[10px] gap-5 px-6">
                <img
                  src="./images/liked_songs1.svg"
                  alt=""
                  className="w-[26px]"
                />
                <span className="text-lg font-bold">Liked Songs</span>
              </button>





              <button className="cursor-pointer text-white flex items-center justify-start gap-5 mt-[10px]  px-6">
                <img
                  src="./images/Your Episodes_img.svg"
                  alt=""
                  className="w-[26px] p-[3px]  bg-[#004638]"
                />
                <span className="text-lg font-bold">Your Episodes</span>
              </button>
            </div>





            <div className="mt-[15%]">
            <li className="cursor-pointer text-white flex items-center justify-start px-6 ">
              <span className="text-lg font-bold">FAV</span>
            </li>

            <li className="cursor-pointer text-white flex items-center justify-start mt-[10px] px-6 ">
              <span className="text-lg font-bold">Daily Mix 1</span>
            </li>

            <li className="cursor-pointer text-white flex items-center justify-start mt-[10px] px-6 ">              
              <span className="text-lg font-bold">Discover Weekly</span>
            </li>


            <li className="cursor-pointer text-white flex items-center justify-start mt-[10px] px-6 ">              
              <span className="text-lg font-bold">Malayalam</span>
            </li>


            <li className="cursor-pointer text-white flex items-center justify-start mt-[10px] px-6 ">              
              <span className="text-lg font-bold">Dance / Electronix Mix</span>
            </li>



            <li className="cursor-pointer text-white flex items-center justify-start mt-[10px] px-6 ">              
              <span className="text-lg font-bold">EDM / Popular</span>
            </li>
            </div>






            <button className="cursor-pointer text-white flex items-center justify-start gap-[25px] mt-[18%]  px-6">
            <GrInstallOption  size={24}/>
                <span className="text-lg font-bold">Install App</span>
              </button>

          </ul>
        </nav>
      </aside>
      {children}
    </>
  );
}
