import { Checkbox } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_PAGE, FILTER_BY_TYPE } from "../../constants/filterContants";

function FilterByType(props) {
  const dispatch = useDispatch();
  const { filterType } = useSelector((state) => state.filters);

  const { filters } = useSelector((state) => state.productList);

  function onChange(e) {
    dispatch({ type: FILTER_BY_PAGE, payload: 1 });
    const isCheck = e.target.checked;
    const value = e.target.value;
    const findIdx = filterType.findIndex((type) => type === value);
    const isExisting = findIdx !== -1;
    if (!isExisting && isCheck) {
      dispatch({ type: FILTER_BY_TYPE, payload: [...filterType, value] });
    } else if (!isCheck) {
      dispatch({
        type: FILTER_BY_TYPE,
        payload: filterType.filter((type) => type !== value),
      });
    }
  }

  return (
    <div className="filters__type">
      <h4>Type</h4>

      <div className="type__checkbox">
        {filters?.typeFilterCount?.map(
          (type, index) =>
            index < 5 && (
              <p key={index} style={{ marginBottom: "8px" }}>
                <Checkbox
                  value={type.type}
                  checked={filterType.indexOf(type.type) !== -1}
                  onChange={onChange}
                >
                  {type.type} ({type.qty})
                </Checkbox>
              </p>
            )
        )}
      </div>
    </div>
  );
}

export default FilterByType;
