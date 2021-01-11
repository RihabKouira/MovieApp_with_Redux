import { ADD_MOVIE, DELETE_MOVIE, FILTER_MOVIE, RATE_SEARCH } from "./types";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};
export const filterMovie = (textinput) => {
  return {
    type: FILTER_MOVIE,
    payload:  textinput ,
  };
};
export const rateSearch = (rate) => {
    return {
      type: RATE_SEARCH,
      payload:  rate ,
    };
  };
