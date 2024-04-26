import Artist from "../components/Artist";
import PLaylist from "../components/playlist";

export default function Search() {
  return (
    <>
      <section className="w-full flex items-center justify-center bg-green-800">
        <h1>Search page</h1>
      </section>
      <div className="title_playlist w-full pl-[341px] pt-10">
        <h1 className="title text-white font-bold text-4xl pb-9 select-none text-start">
          Your top genres
        </h1>
        <div className="playlists flex flex-wrap gap-7">



        

        <>
      <div className="bg-[url('/images/bg_img_POP.svg')] bg-no-repeat bg-[#8D67AB] playlist rounded w-[370px] h-[240px] flex items-center gap-5 cursor-pointer select-none">
        
        <p className="text-4xl pl-3 pt-6 playlist_name text-start pb-[200px] text-white font-bold">
          Pop
        </p>
      </div>

      <div className="playlist rounded w-[370px] h-[240px] bg-[#303030] flex items-center gap-5 cursor-pointer select-none">
        <img src="./images/liked_songs1.svg" alt="" />
        <h2 className="playlist_name text-xl text-white font-bold">
          HEllo
        </h2>
      </div>


      <div className="playlist rounded w-[370px] h-[240px] bg-[#303030] flex items-center gap-5 cursor-pointer select-none">
        <img src="./images/liked_songs1.svg" alt="" />
        <h2 className="playlist_name text-xl text-white font-bold">
          HEllo
        </h2>
      </div>
    </>

          {/* <PLaylist
           img_src={"/images/liked_songs1.svg"}
           playlist_name={"Liked Songs"}
         />
         <PLaylist
           img_src={"/images/liked_songs2.svg"}
           playlist_name={"Neffex Playlist"}
         />
         <PLaylist
           img_src={"/images/liked_songs3.png"}
           playlist_name={"K/ DA"}
         /> */}
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
