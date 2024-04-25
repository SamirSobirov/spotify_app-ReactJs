



function PLaylist({img_src, playlist_name}) {


  return (
      <>
          <div className="playlist rounded w-[361px] h-[100px] bg-[#303030] flex items-center gap-5 cursor-pointer select-none">
              <img src={img_src} alt="" />
              <h2 className='playlist_name text-xl text-white font-bold'>{playlist_name}</h2>
          </div>
      </>
  )
}

export default PLaylist