import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";
import { GlobalContext } from "./context/GlobalContext";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist } = useContext(GlobalContext);
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        style={{ height: "340px" }}
      ></img>
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          {movie.title}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
          {`  ${movie.vote_average}/10 (${movie.vote_count} votes) \u00B7 ${
            movie.release_date ? movie.release_date.substring(0, 4) : "-"
          }`}
        </CardSubtitle>
        <CardText tag="h6"></CardText>
        <div className="card-btns">
          <Button onClick={() => addMovieToWatchlist(movie)} color="success">
            Add to Watchlist
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ResultCard;
