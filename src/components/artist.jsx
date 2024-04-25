


export default function Artist({img_src, artist_playlist, artist_name}) {


    return (
        <>
            <div className="cursor-pointer artist flex flex-col gap-6 py-6 px-7 bg-[#181818]">
                <img className='rounded-2xl' src={img_src} alt="" />
                <div className="artist_info flex flex-col gap-1.5">
                    <h1 className='artist_playlist text-xl text-white'>{artist_playlist}</h1>
                    <h6 className='artist_name text-base text-white'>{artist_name}</h6>
                </div>
            </div>
        </>
    )
}

