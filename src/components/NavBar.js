import React from "react";
import AddMovie from "./AddMovie";
import { Form, FormControl } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { useSelector, useDispatch } from "react-redux";
import { filterMovie, rateSearch } from "../actions/actions";

const NavBar = () => {
  const filterRate = useSelector((state) => state.MovieReducer.filterRate);
  const dispatch = useDispatch();
  const onStarClick = (nextValue) => {
    console.log(nextValue)
    dispatch(rateSearch(nextValue));
  };
  const handleChange = (e) => {
    dispatch(filterMovie(e.target.value));
  };

  return (
    <div className="nav">
      <Form inline>
        <h1>Movie Cards</h1>
      </Form>

      <Form inline>
        <div className="search">
          <FormControl
            type="text"
            placeholder="Search ..."
            className="mr-sm-2"
            onChange={handleChange}
          />
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={filterRate}
            onStarClick={onStarClick}
            className="starSearch"
          />
        </div>
      </Form>

      <Form inline>
        <AddMovie />
      </Form>
    </div>
  );
};

export default NavBar;
