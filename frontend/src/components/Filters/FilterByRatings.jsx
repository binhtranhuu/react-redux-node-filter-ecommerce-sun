import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_PAGE,
  FILTER_BY_RATING,
} from "../../constants/filterContants";
import { ratings } from "../../utils";
import Rating from "../Rating";
import "./styles.scss";

function FilterByRatings(props) {
  const dispatch = useDispatch();
  const { filterRating } = useSelector((state) => state.filters);

  function chooseRating(rating) {
    dispatch({ type: FILTER_BY_PAGE, payload: 1 });
    dispatch({ type: FILTER_BY_RATING, payload: rating });
  }

  return (
    <div className="filters__ratings">
      <h4>Ratings</h4>
      <ul>
        {ratings.map((r) => (
          <li
            className={filterRating === r.rating ? "active" : ""}
            onClick={(e) => chooseRating(r.rating)}
            key={r.name}
          >
            <Rating caption={" & up"} rating={r.rating}></Rating>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterByRatings;
