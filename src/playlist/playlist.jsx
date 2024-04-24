export default function PlayList() {
  return (
    <>
      <div className="pl-[250px]">
        <div className="items-end flex justify-center  text-center mt-[20px] ">
          <div className="bg-[#303030] w-[20%] flex ">
            <img className="h-[71px]" src="./images/liked_songs1.svg" alt="Liked Songs.img" />
            <span className="p-6 text-white">Liked Songs</span>
          </div>

          <div className="bg-[#303030] w-[20%] flex ml-6">
            <img className="h-[71px]" src="./images/liked_songs2.svg" alt="Neffex Playlist.img" />
            <span className="p-6 text-white">Neffex Playlist</span>
          </div>

          <div className="bg-[#303030] w-[20%] ml-6 flex ">
            <img className="h-[71px]" src="./images/liked_songs3.png" alt="K/ DA.img" />
            <span className="p-6 text-white">K/ DA</span>
          </div>

          <div className="bg-[#303030] w-[20%] ml-6 flex ">
            <img className="h-[71px]" src="./images/liked_songs4.svg" alt="Liked Songs.img" />
            <span className="p-6 text-white">Liked Songs</span>
          </div>
        </div>

        <div className="bg-[#303030] w-[20%] ml-[90px] flex mt-[20px]">
          <img className="h-[71px]" src="./images/liked_songs5.svg" alt="Liked Songs.img" />
          <span className="p-6 text-white">Liked Songs</span>
        </div>
      </div>

      
    </>
  );
}
