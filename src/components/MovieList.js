import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = useSelector((state) => state.MovieReducer.initialState);
  const filterTitle = useSelector((state) => state.MovieReducer.filterTitle);
  const filterRate = useSelector((state) => state.MovieReducer.filterRate);

  const filterMovie = movies.filter((el) => {
    return (
        el.rating >= filterRate &&
      el.title.toLowerCase().includes(filterTitle.toLowerCase().trim())
    );
  });
  return (
    <div className="MovieList">
      {filterMovie.map((el) => {
        return <MovieCard key={el.id} movie={el} />;
      })}
    </div>
  );
};

export default MovieList;
