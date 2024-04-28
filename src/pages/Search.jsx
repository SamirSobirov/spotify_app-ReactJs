import Artist from "../components/Artist";
import PLaylist from "../components/playlist";

export default function Search() {
  return (
    <>

<div className="items-start text-left pl-[335px]">
<form class="form relative ">
  <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
    <svg
      width="17"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="search"
      class="w-5 h-5 text-gray-700"
    >
      <path
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
        stroke="currentColor"
        stroke-width="1.333"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
  <input
    class="input w-[455px] rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
    placeholder="Artists, songs, or podcasts"
    required=""
    type="text"
  />
</form>
</div>

     
      <div className="title_playlist w-full pl-[341px]">
        <h1 className="title text-white font-bold text-4xl pb-9 select-none text-start">
          Your top genres
        </h1>
        <div className="playlists flex flex-wrap gap-7">



      

        

        <>
      <div className="bg-[url('/images/bg_img_POP.svg')] bg-right-bottom bg-no-repeat bg-[#8D67AB] playlist rounded w-[370px] h-[240px] flex items-center gap-5 cursor-pointer select-none">
        
        <p className="text-4xl pl-6 pt-10 playlist_name text-start pb-[200px] text-white font-bold">
          Pop
        </p>
      </div>



      <div className="bg-[url('/images/bg_img_HipHop.svg')] bg-[#BA5D07] bg-right-bottom bg-no-repeat playlist rounded w-[370px] h-[240px] flex items-center gap-5 cursor-pointer select-none">
        
        <p className="text-4xl pl-6 pt-10 playlist_name text-start pb-[200px] text-white font-bold">
        Hip-Hop
        </p>
      </div>


      <div className="bg-[url('/images/bg_img_Indie.svg')] bg-right-bottom bg-no-repeat bg-[#608108] playlist rounded w-[370px] h-[240px] flex items-center gap-5 cursor-pointer select-none">
        
        <p className="text-4xl pl-6 pt-10 playlist_name text-start pb-[200px] text-white font-bold">
        Indie
        </p>
      </div>
    </>

       
        </div>
      </div>

      <div className="shows_container pt-12 pl-[340px] pr-10">
        <div className="shows_header flex justify-between items-center pb-8 select-none">
          <h1 className="text-white font-bold text-3xl">Browse all</h1>
          <button className="see_all text-white text-lg font-bold"></button>
        </div>
        <div className="shows flex gap-8 flex-wrap">
          <Artist
            img_src={"/images/artist1.svg"}
            artist_playlist={"Weekly Motivatio..."}
            artist_name={"Ben Ina Scott"}
          />
          <Artist
            img_src={"/images/artist2.svg"}
            artist_playlist={"MEDITATION SELF"}
            artist_name={"Ibn Hussain Aleen"}
          />
          <Artist
            img_src={"/images/artist3.svg"}
            artist_playlist={"Words beyond act..."}
            artist_name={"Samuel Scott"}
          />
          <Artist
            img_src={"/images/artist4.svg"}
            artist_playlist={"The Alexa Show"}
            artist_name={"Adriana Tom"}
          />
          <Artist
            img_src={"/images/artist5.svg"}
            artist_playlist={"The Stories of Ma..."}
            artist_name={"Lexus"}
          />
          <Artist
            img_src={"/images/artist6.svg"}
            artist_playlist={"Motivation Daily b..."}
            artist_name={"Georgina Martha"}
          />
        </div>
      </div>
    </>
  );
}




