import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";
import { GlobalContext } from "../context/GlobalContext";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let addedMovie = watchlist.find((anyMovie) => anyMovie.id === movie.id); //check if moive is already added to the watchlist
  const addDisabled = addedMovie ? true : false;

  return (
    <div className="movie-card">
      <Card
        style={{
          width: "17rem",
          height: "31rem",
          backgroundColor: "rgba(255, 255, 255, 0.4)"
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          height="330px"
          style={{ borderRadius: "5px" }}
        ></img>

        <CardBody>
          <CardTitle tag="h5" className="text-center" style={{ fontSize: "1rem" }}>
            {movie.title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-center text-secondary">
            {`  ${movie.vote_average}/10 (${movie.vote_count} votes) \u00B7 ${
              movie.release_date ? movie.release_date.substring(0, 4) : "-"
            }`}
          </CardSubtitle>
          <div className="text-center">
            <Button onClick={() => addMovieToWatchlist(movie)} disabled={addDisabled} color="success">
              Add to Watchlist
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResultCard;
