import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../AppContext";
import { FILTER_BY_NAME, FILTER_BY_PAGE } from "../../constants/filterContants";
import "./styles.scss";

function Navbar(props) {
  const dispatch = useDispatch();
  const { filterName } = useSelector((state) => state.filters);

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo__image">
          <img src="./images/logo-is.webp" alt="Logo" />
        </a>
        <a href="/" className="logo__text">
          amazing
        </a>
      </div>
      <div className="form">
        <form className="form__search">
          <input
            className="form__input"
            type="text"
            name="search"
            value={filterName}
            onChange={(e) => {
              dispatch({ type: FILTER_BY_PAGE, payload: 1 });
              dispatch({ type: FILTER_BY_NAME, payload: e.target.value });
            }}
            placeholder="Search a product"
          />
          <button className="form__button" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
