import { useState } from "react";
import Star from "./Star";

const StarRating = ({ currentRating, changeRating }) => {
  const [rating, setRating] = useState(currentRating || 0);

  const handleClick = (value) => {
    setRating(value);
    changeRating(value);
  };

  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} filled={value <= rating} onClick={() => handleClick(value)} />
      ))}
    </span>
  );
};

export default StarRating;
