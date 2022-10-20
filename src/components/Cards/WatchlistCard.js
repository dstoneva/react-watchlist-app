import React from "react";
import { MovieControls } from "../MovieControls";

export const WatchlistCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} height="330px" alt={`${movie.title} Poster`} />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
