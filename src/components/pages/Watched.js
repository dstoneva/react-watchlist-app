import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { WatchlistCard } from "../Cards/WatchlistCard";
import Star from "../Rating/Star";
import { Card, CardBody, CardSubtitle } from "reactstrap";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <div className="watched-rating">
                <Card color="light">
                  <WatchlistCard movie={movie} key={movie.id} type="watched" />
                  <CardBody>
                    <CardSubtitle className="text-center">Your rating: {movie.user_rating}/5</CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
export default Watched;
