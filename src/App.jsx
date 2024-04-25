import './App.css'
import PLaylist from './components/playlist'
import Layout from './layout/Layout'
import Artist from './components/Artist';

function App() {

  return (
    <Layout>
      <div className='title_playlist w-full pl-[341px] pt-10'>
        <h1 className='title text-white font-bold text-4xl pb-9 select-none text-start'>Good morning</h1>
        <div className="playlists flex flex-wrap gap-7">
          <PLaylist
            img_src={'/images/liked_songs1.svg'}
            playlist_name={'Liked Songs'}
          />
          <PLaylist
            img_src={'/images/liked_songs2.svg'}
            playlist_name={'Neffex Playlist'}
          />
          <PLaylist
            img_src={'/images/liked_songs3.png'}
            playlist_name={'K/ DA'}
          />
          <PLaylist
            img_src={'/images/liked_songs4.svg'}
            playlist_name={'Dance / Electronic Mix'}
          />
        </div>
      </div>

      <div className="shows_container pt-12 pl-[340px] pr-10">
        <div className="shows_header flex justify-between items-center pb-8 select-none">
          <h1 className='text-white font-bold text-3xl'>Shows you might like</h1>
          <button className="see_all text-white text-lg font-bold">SEE ALL</button>
        </div>
        <div className="shows flex gap-8 flex-wrap">
          <Artist
            img_src={"/images/artist1.svg"}
            artist_playlist={'Weekly Motivatio...'}
            artist_name={'Ben Ina Scott'}
          />
          <Artist
            img_src={"/images/artist2.svg"}
            artist_playlist={'MEDITATION SELF'}
            artist_name={'Ibn Hussain Aleen'}
          />
          <Artist
            img_src={"/images/artist3.svg"}
            artist_playlist={'Words beyond act...'}
            artist_name={'Samuel Scott'}
          />
          <Artist
            img_src={"/images/artist4.svg"}
            artist_playlist={'The Alexa Show'}
            artist_name={'Adriana Tom'}
          />
          <Artist
            img_src={"/images/artist5.svg"}
            artist_playlist={'The Stories of Ma...'}
            artist_name={'Lexus'}
          />
          <Artist
            img_src={"/images/artist6.svg"}
            artist_playlist={'Motivation Daily b...'}
            artist_name={'Georgina Martha'}
          />
        </div>
      </div>
    </Layout>
  )
}

export default App