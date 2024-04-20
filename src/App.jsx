import "./App.css";
import Layout from "./layout/Layout";
import PlayList from "./playlist/playlist";

function App() {
  return (
    <>
      <Layout>
        <div className="items-center ">
          <p className="text-center text-4xl font-bold mr-[500px] mt-[25px] text-white">
            Good morning
          </p>
        </div>
      </Layout>

      <PlayList />
    </>
  );
}

export default App;
