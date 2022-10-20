import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { Button } from "reactstrap";

export const MovieControls = ({ type, movie }) => {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched, showRatingModal } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <div className="card-btns">
          <Button color="success" className="ctrl-btn" onClick={() => showRatingModal(movie)}>
            Watched
          </Button>
          <Button color="danger" className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
            Remove
          </Button>
        </div>
      )}
      {type === "watched" && (
        <div className="card-btns">
          <Button color="success" onClick={() => moveToWatchlist(movie)}>
            Unwatch
          </Button>

          <Button color="danger" onClick={() => removeFromWatched(movie.id)}>
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
