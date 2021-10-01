import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_PAGE } from "../../constants/filterContants";
import { PRODUCT_PAGINATION_PAGE } from "../../constants/productConstants";
import "./styles.scss";

function Paginate(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { page, totalRows } = productList;

  const onChange = (page) => {
    dispatch({ type: PRODUCT_PAGINATION_PAGE, payload: page });
    dispatch({ type: FILTER_BY_PAGE, payload: page });
  };

  return (
    <div className="paginate">
      <Pagination
        current={page}
        onChange={onChange}
        total={totalRows}
        pageSize={16}
      />
    </div>
  );
}

export default Paginate;
