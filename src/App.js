import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Watchlist from "./components/pages/Watchlist";
import Watched from "./components/pages/Watched";
import Search from "./components/pages/Search";
import { GlobalProvider } from "./components/context/GlobalContext";
import RatingModal from "./components/Modal/RatingModal";

function App() {
  return (
    <GlobalProvider>
      <RatingModal />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
