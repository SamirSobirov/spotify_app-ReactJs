import "./App.css";
import Layout from "./layout/Layout";
import PlayList from "./components/playlist";
import ArtistsPlaylist from './components/artist'

function App() {
  return (
    <>
      <Layout>
        <div className="items-center ">
          <p className="text-center text-4xl font-bold pr-[600px] mt-[25px] text-white">
            Good morning
          </p>
        </div>



      </Layout>

      <PlayList />

      <div className="items-center flex justify-between whitespace-nowrap">
          <p className="text-center text-4xl font-bold pl-[340px] mt-[48px] text-white">
          Shows you might like
          </p>

          <a href="#" className="mr-[100px] text-white mt-14">SEE ALL</a>
        </div>


        <ArtistsPlaylist />
      
    </>
  );
}

export default App;
