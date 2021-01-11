import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../actions/actions";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div className="MovieCard ">
      <img src={movie.img} alt="" className="center" />

      <div className="Movie-Info">
        <h2>{movie.title}</h2>
        <h4>{movie.auther}</h4>
        <span>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movie.rating}
            className="starSearch"
          />
        </span>
      </div>
      <RiDeleteBin6Line
        className="bin"
        onClick={() => {
          dispatch(deleteMovie(movie.id));
        }}
      />
    </div>
  );
};

export default MovieCard;
