export default function PlayList() {
  return (
    <>
      <div className="ml-[17%]">
        <div className="items-end flex justify-center  text-center mt-[20px] ">
          <div className="bg-[#303030] w-[20%] flex ">
            <img className="h-[71px]" src="./images/liked_songs.svg" alt="" />
            <span className="p-6 text-white">Liked Songs</span>
          </div>

          <div className="bg-[#303030] w-[20%] flex ml-6">
            <img className="h-[71px]" src="./images/liked_songs2.svg" alt="" />
            <span className="p-6 text-white">Neffex Playlist</span>
          </div>

          <div className="bg-[#303030] w-[20%] ml-6 flex ">
            <img className="h-[71px]" src="./images/liked_songs3.png" alt="" />
            <span className="p-6 text-white">K/ DA</span>
          </div>

          <div className="bg-[#303030] w-[20%] ml-6 flex ">
            <img className="h-[71px]" src="./images/liked_songs4.svg" alt="" />
            <span className="p-6 text-white">Liked Songs</span>
          </div>
        </div>

        <div className="bg-[#303030] w-[20%] ml-[83px] flex mt-[20px]">
          <img className="h-[71px]" src="./images/liked_songs5.svg" alt="" />
          <span className="p-6 text-white">Liked Songs</span>
        </div>
      </div>

      
    </>
  );
}
