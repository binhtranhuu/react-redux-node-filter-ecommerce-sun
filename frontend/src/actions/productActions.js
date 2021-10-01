import axios from "axios";
import { baseURL } from "../utils";
import {
  PRODUCT_FILTERS_RESPONSE,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_PAGINATION_COUNT,
  PRODUCT_PAGINATION_PAGE,
  PRODUCT_PAGINATION_PAGES,
} from "../constants/productConstants";

export const listProducts =
  ({
    page,
    filterCategory,
    filterType,
    filterBrand,
    filterRating,
    filterPrice,
    filterName,
    orderBy,
  }) =>
  async (dispatch, getState) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    let url = `${baseURL}/products?`;

    if (page >= 2) {
      url += `&pageNumber=${page}`;
    }

    if (filterName) {
      url += `&name=${filterName}`;
    }

    if (orderBy) {
      url += `&order=${orderBy}`;
    }

    if (filterCategory.length > 0) {
      filterCategory.forEach((category) => (url += `&category=${category}`));
    }

    if (filterType.length > 0) {
      filterType.forEach((type) => (url += `&type=${type}`));
    }

    if (filterBrand.length > 0) {
      filterBrand.forEach((brand) => (url += `&brand=${brand}`));
    }

    if (filterRating > 0) {
      url += `&rating=${filterRating}`;
    }

    if (filterPrice.min || filterPrice.max) {
      for (const key in filterPrice) {
        url += `&${key}=${filterPrice[key]}`;
      }
    }

    try {
      const { data } = await axios.get(url);
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data.productList.products,
      });
      dispatch({
        type: PRODUCT_PAGINATION_PAGE,
        payload: data.productList.page,
      });
      dispatch({
        type: PRODUCT_PAGINATION_PAGES,
        payload: data.productList.pages,
      });
      dispatch({
        type: PRODUCT_PAGINATION_COUNT,
        payload: data.productList.totalRows,
      });
      dispatch({ type: PRODUCT_FILTERS_RESPONSE, payload: data.filters });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };
