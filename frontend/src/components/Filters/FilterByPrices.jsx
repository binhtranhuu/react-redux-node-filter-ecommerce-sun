import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_PAGE,
  FILTER_BY_PRICE,
} from "../../constants/filterContants";
import { prices } from "../../utils";

function FilterByPrices(props) {
  const dispatch = useDispatch();
  const { filterPrice } = useSelector((state) => state.filters);

  function choosePrice(min, max) {
    dispatch({ type: FILTER_BY_PAGE, payload: 1 });
    dispatch({ type: FILTER_BY_PRICE, payload: { min, max } });
  }

  return (
    <div className="filters__prices">
      <h4>Prices</h4>
      <ul>
        {prices.map((p, index) => (
          <li
            className={
              filterPrice.min === p.min && filterPrice.max === p.max
                ? "active"
                : ""
            }
            onClick={(e) => choosePrice(p.min, p.max)}
            key={index}
          >
            {p.name}
          </li>
        ))}
      </ul>
      <form className="form__price">
        <span>$</span>
        <input
          type="number"
          value={filterPrice.min}
          onChange={(e) => {
            dispatch({ type: FILTER_BY_PAGE, payload: 1 });
            dispatch({
              type: FILTER_BY_PRICE,
              payload: { ...filterPrice, min: e.target.value },
            });
          }}
        />
        to <span>$</span>
        <input
          type="number"
          value={filterPrice.max}
          onChange={(e) => {
            dispatch({ type: FILTER_BY_PAGE, payload: 1 });
            dispatch({
              type: FILTER_BY_PRICE,
              payload: { ...filterPrice, max: e.target.value },
            });
          }}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default FilterByPrices;
