import { useContext } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoPauseSharp, IoPlay  } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { TbArrowsDiagonal } from "react-icons/tb";
import { FiVolume2 } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { TrackContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";



export default function Player(params) {
    const [play, setPlay] = useState(false)

    const {track} = useContext(TrackContext)

    useEffect(() => {
        const audio = document.querySelector('audio')


        audio.play()

    }, [track])

    return (
        <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#1a1a1a] z-10 flex items-center justify-between p-5" >
            <div className="flex items-center gap-4 " >
                <img
                    className="w-[70px] h-[70px]"
                    src={track?.img}
                    alt="" 
                />
                <div className="text-white flex flex-col items-start " >
                    <span>{track?.name}Dreaming On</span>
                    <span className="text-[#B3B3B3] text-sm">{track?.singers}NEFFEX</span>
                </div>
                <button className="text-white" >
                    <FaHeart size={18} />
                </button>
            </div>

            <div className="flex items-center flex-col justify-center gap-2" >
                <audio src={track?.src} controls hidden ></audio>
                <div className="flex items-center gap-2" >
                    <button className="text-[#c4c4c4]" >
                        <MdSkipPrevious size={24} />
                    </button>
                    <button className="p-[8px] text-center bg-white rounded-full" >
                        {
                            true ? <IoPlay size={24} /> : <IoPauseSharp size={24} />  
                        }
                    </button>
                    <button className="text-[#c4c4c4]" >
                        <MdSkipNext size={24} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-2 text-[#c4c4c4]" >
                    <span>0:57</span>
                    <input type="range" className="custom-range w-[630px]" />
                    <span>0:57</span>
                </div>
            </div>
            <div>

                <div className="flex items-center pr-[29px] gap-[10px]">
                <button><FiVolume2 size={27}  color="#B3B3B3"/></button>

                <input type="range" />
                
                <button></button>
                </div>
            </div>
        </section>
    )
}