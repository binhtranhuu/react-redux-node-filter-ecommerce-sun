import {
  PRODUCT_FILTERS_RESPONSE,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_PAGINATION_COUNT,
  PRODUCT_PAGINATION_PAGE,
  PRODUCT_PAGINATION_PAGES,
} from "../constants/productConstants";

export const productListReducer = (
  state = { loading: true, products: [], page: 1, pages: 1, totalRows: 16 },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_PAGINATION_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case PRODUCT_PAGINATION_PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case PRODUCT_PAGINATION_COUNT:
      return {
        ...state,
        totalRows: action.payload,
      };
    case PRODUCT_FILTERS_RESPONSE:
      return {
        ...state,
        filters: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
