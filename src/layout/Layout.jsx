import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import ProfileMenu from "../components/ProfileMenu";

export default function Layout({children}) {

    return (
        <>
            <header className="w-full flex justify-between items-center pl-[340px] pr-10 py-5" >
                <div className="flex items-center gap-1" >
                    <button className="bg-[#131313] rounded-full p-2 " >
                        <MdOutlineKeyboardArrowLeft size={24} color="white"  />
                    </button>
                    <button className="bg-[#131313] rounded-full p-2 " >
                        <MdOutlineKeyboardArrowRight size={24} color="white" />
                    </button>
                </div>
                <ProfileMenu/>
            </header>
            <aside className="w-[300px] bg-black px-2.5 py-8 fixed top-0 left-0 bottom-0 flex flex-col items-start gap-7" >
                <img src="/icons/big-logo.svg" alt="logo" className="pl-6" />
                <nav >
                    <ul>
                        <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6 " >
                            <AiFillHome size={26} />
                            <span className="text-lg font-bold" >Home</span>
                        </li>
                        <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6" >
                            <CiSearch size={26} />
                            <span className="text-lg font-bold" >Search</span>
                        </li>
                        <li className="cursor-pointer text-white flex items-center justify-start gap-5 py-3 px-6" >
                            <BiLibrary size={26} />
                            <span className="text-lg font-bold" >Library</span>
                        </li>
                    </ul>
                </nav>
            </aside>
            {children}
            <div></div>
        </>
    )
}