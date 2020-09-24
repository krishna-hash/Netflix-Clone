import React from "react";
import Rows from "./Rows";
import request from "./Request";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner />
      <Rows large title={"Netflix Series"} fetchurl={request.Netflix} />
      <Rows title={"Kids Movies"} fetchurl={request.Kidsmovies} />
      <Rows title={"Popular Movies"} fetchurl={request.Rrated} />
      <Rows title={"Comedy Movies"} fetchurl={request.Comedy} />
      <Rows title={"Theater Release"} fetchurl={request.Theater} />
      <Rows title={"Romantic Movies"} fetchurl={request.Romantic} />
      <Rows title={"Action Movies"} fetchurl={request.Action} />
      <Rows title={"Documentaries"} fetchurl={request.Document} />
    </div>
  );
};

export default App;
