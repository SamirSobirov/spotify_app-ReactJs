import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProfileMenu from "../components/ProfileMenu";
import { TiHome } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { HiPlusSmall } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";

import { BiLibrary } from "react-icons/bi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Player from "../components/Player";



export default function Layout() {
    
    const [token, setToken] = useState('')
    const navigate = useNavigate()


    
    
    useEffect(() => {
        let token = localStorage.getItem('token')
        let hash = location.hash
    
        if(!token && hash) {
            token = hash.split('=')[1].split('&')[0]
            location.href = ''
            localStorage.setItem('token', token)
        }

        setToken(token)
    }, [])

    if(!token) {
        navigate('/login')
    }
    
    return (
        <>
            <header className="w-full flex justify-between items-center pl-[340px] pr-10 py-5 z-10">
                <div className="flex items-center gap-1">
                <button
            onClick={() => navigate(-1)}
            className="bg-[#131313] rounded-full p-2"
          >
            <MdKeyboardArrowLeft size={24} color="white" />
          </button>
          <button
            className="bg-[#131313] rounded-full p-2"
            onClick={() => navigate(+1)}
          >
            <MdKeyboardArrowRight size={24} color="white" />
          </button>
                </div>

                <ProfileMenu></ProfileMenu>
            </header>
            <aside className="w-[300px] bg-black px-2.5 py-8 fixed z-10 top-0 left-0 bottom-0 flex flex-col items-start gap-7">
                <img src="/icons/big-logo.svg" alt="logo" className="pl-6" />
                <nav className="w-full">
                    <ul className="w-full">
                        <Link to={'/'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <AiFillHome color="white" size={26} />
                                <span className="text-lg font-bold">Home</span>
                            </li>
                        </Link>
                        <Link to={'/search'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <CiSearch color="white" size={26} />
                                <span className="text-lg font-bold">Search</span>
                            </li>
                        </Link>
                        <Link to={'/library'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <BiLibrary color="white" size={26} />
                                <span className="text-lg font-bold">Your Library</span>
                            </li>
                        </Link>
                        <li className="text-white flex items-center justify-start gap-6 pt-10  px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <HiPlusSmall color="black" size={26} className="bg-white"/>
                                <span className="text-lg font-bold">Create Playlist</span>
                            </li>

                            <li className="text-white flex items-center justify-start gap-6 pt-4 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <img src="/images/layout_likedsong.png" alt="heart" className="w-[27px]"/>
                                <span className="text-lg font-bold">Liked Songs</span>
                            </li>


                            <li className="text-white flex items-center justify-start gap-6 pt-4  px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                            <img src="/images/Your Episodes_img.svg" alt="heart" className="w-[27px] "/>
                                <span className="text-lg font-bold">Your Episodes</span>
                            </li>
                    </ul>
                </nav>
            </aside>
            <Outlet />
            <Player />
        </>
    )
}