import React, { useState, useEffect } from "react";
import axios from "./Axios";
import "./Row.css";
import Youtube from "react-youtube";
import movietrailer from "movie-trailer";
function Rows({ title, fetchurl, large }) {
  const [trailer, settrailer] = useState("");
  const url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const request = async () => {
      const fetching = await axios.get(fetchurl);
      setmovies(fetching.data.results);
    };
    request();
  }, []);
  const value = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const change = (movie) => {
    if (trailer) {
      settrailer("");
    } else {
      //https://www.youtube.com/watch?v=zsaff26T4Wg
      movietrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          settrailer(params.get("v"));
        })
        .catch((err) => console.log("errr", err));
    }
  };

  return (
    <div className="rows">
      <h2>{title}</h2>
      <div className="row_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => change(movie)}
            className={`posters  ${large && "largeposter"}`}
            src={`${url}${large ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailer && <Youtube videoId={trailer} opts={value}></Youtube>}
    </div>
  );
}

export default Rows;
