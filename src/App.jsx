import "./App.css";
import Layout from "./layout/Layout";
import PlayList from "./playlist/playlist";
import ArtistsPlaylist from './artistplaylist/artist'

function App() {
  return (
    <>
      <Layout>
        <div className="items-center ">
          <p className="text-center text-4xl font-bold mr-[540px] mt-[25px] text-white">
            Good morning
          </p>
        </div>



      </Layout>

      <PlayList />

      <div className="items-center flex justify-between whitespace-nowrap">
          <p className="text-center text-4xl font-bold ml-[330px] mt-[48px] text-white">
          Shows you might like
          </p>

          <a href="#" className="mr-[100px] text-white mt-14">SEE ALL</a>
        </div>


        <ArtistsPlaylist />
      
    </>
  );
}

export default App;
