import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../AppContext";
import { FILTER_BY_ORDER } from "../../constants/filterContants";
import "./styles.scss";

function Sorts(props) {
  const productList = useSelector((state) => state.productList);
  const { totalRows } = productList;

  const dispatch = useDispatch();
  const { orderBy } = useSelector((state) => state.filters);

  return (
    <div className="summary">
      <div className="results">{totalRows} results</div>
      <div className="orders">
        <div className="orders__text">Sort by</div>
        <div className="orders__select">
          <select
            value={orderBy}
            onChange={(e) =>
              dispatch({ type: FILTER_BY_ORDER, payload: e.target.value })
            }
            name="orders"
            id="orders"
          >
            <option value="">Featured</option>
            <option value="lowest">Price asc</option>
            <option value="highest">Price desc</option>
            <option value="toprated">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sorts;
