import "./App.css";
import PLaylist from "./components/playlist";
import Layout from "./layout/Layout";
import Artist from "./components/Artist";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
