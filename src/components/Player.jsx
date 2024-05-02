import { useContext } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoPauseSharp, IoPlay, IoVolumeHigh } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useState } from "react";
import { TrackContext } from "../context/TrackCTX";
import { useEffect } from "react";
import { PLaylistContext } from "../context/PlaylistCTX";
import { artistsString, toMinutes } from "../helpers/utils";
import VolumeChange from './VolumeChange'

export default function Player(params) {
    
        const [isPlaying, setIsPlaying] = useState(false);
      
        const togglePlayPause = () => {
          const audio = document.getElementById('audio');
          if (isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
          setIsPlaying(!isPlaying);
        };

  const [play, setPlay] = useState(false);

  const { track, setTrack } = useContext(TrackContext);
  const { playlist_ctx } = useContext(PLaylistContext);

  useEffect(() => {
    const audio = document.querySelector("audio");
    console.log({ track });
    audio.src = track?.src;
    audio.play();
  }, [track]);

  function nextTrack() {
    const curr_track = playlist_ctx[track.index + 1];
    const next_track = {
      img: curr_track.track.album.images[0].url,
      name: curr_track.track.name,
      singers: artistsString(curr_track.track.artists),
      duration: toMinutes(curr_track.track.duration_ms),
      album: curr_track.track.album.name,
      date: curr_track.track.release_date,
      src: curr_track.track.preview_url,
      index: track.index + 1,
    };
    setTrack(next_track);
  }
  function prevTrack() {
    setTrack(playlist_ctx[track.index - 1]);
  }

  
  return (
    <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5">
      <div className="flex items-center gap-4 ">
        {track? (
          <img className="w-[70px] h-[70px]" src={track.img} alt="" />
        ) : (
          <img
            className="w-[70px] h-[70px]"
            src="/images/liked_songs1.svg"
            alt=""
          />
        )}
        <div className="text-white flex flex-col items-start ">
          <span>{track?.name}</span>
          <span>{track?.singers}</span>
        </div>
        <button className="text-white">
          <FaRegArrowAltCircleDown size={18} />
        </button>
      </div>

      <div className="flex items-center flex-col justify-center gap-2">
      <audio id="audio" src={track?.src} controls hidden></audio>
      <div className="flex items-center gap-2">
        <button onClick={prevTrack} className="text-[#c4c4c4]">
          <MdSkipPrevious size={24} />
        </button>
        <button onClick={togglePlayPause} className="p-[8px] text-center bg-white rounded-full">
          {isPlaying ? <IoPauseSharp size={24} /> : <IoPlay size={24} />}
        </button>
        <button onClick={nextTrack} className="text-[#c4c4c4]">
          <MdSkipNext size={24} />
        </button>
      </div>
      <div className="w-full flex items-center gap-2 text-[#c4c4c4]">
        <span>0:00</span>
        <input type="range" className="custom-range w-[630px]" />
        <span>0:30</span>
      </div>
    </div>
      <div>
        <button></button>
        <div className="flex items-center gap-2">
          <IoVolumeHigh color="white" size={24} />
          
          <VolumeChange />
        </div>
        <button></button>
        <button></button>
      </div>
    </section>
  );
}
