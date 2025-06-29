// src/App.js
import React from "react";
import Header from "./Components/Header"
import Rankers from "./Components/Rankers";
import LeaderboardTable from "./Components/LeaderboardTable";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Rankers />
      <LeaderboardTable/>
      <Footer/>
    </>
  );
}

export default App;
