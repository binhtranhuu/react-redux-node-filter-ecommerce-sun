import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { filtersReducer } from "./reducers/filterReducers";
import { productListReducer } from "./reducers/productReducers";

const initialState = {
  filters: {
    page: 1,
    filterCategory: [],
    filterType: [],
    filterBrand: [],
    filterRating: 0,
    filterPrice: {},
    filterName: "",
    orderBy: "",
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  filters: filtersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
