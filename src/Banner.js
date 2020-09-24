import React, { useEffect, useState } from "react";
import axios from "./Axios";
import Request from "./Request";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    const request = async () => {
      const fetch = await axios.get(Request.Kidsmovies);
      setmovie(
        fetch.data.results[
          Math.floor(Math.random() * fetch.data.results.length - 1)
        ]
      );
    };
    request();
  }, []);
  console.log("value", movie);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "......" : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_container">
        <h1 className="title">
          {movie?.name || movie?.title || movie?.original_title}
        </h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="des">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
