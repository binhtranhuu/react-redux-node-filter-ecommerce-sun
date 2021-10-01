import { Tree } from "antd";
import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_CATEGORY,
  FILTER_BY_PAGE,
} from "../../constants/filterContants";
import { convertArrayToTree } from "../../utils";

function FilterByCategory(props) {
  const dispatch = useDispatch();
  const { filterCategory } = useSelector((state) => state.filters);

  const { filters } = useSelector((state) => state.productList);

  var updatedUniqueCategories = _.map(
    filters?.categories,
    function (currObj, index) {
      var newObj = {};

      Object.keys(currObj).forEach(function (key) {
        if (key === "_id") {
          newObj.key = currObj[key];
        } else if (key === "name") {
          newObj.title = currObj[key];
        } else {
          newObj[key] = currObj[key];
        }
      });
      return newObj;
    }
  );

  var result = convertArrayToTree(updatedUniqueCategories);

  const onSelect = (selectedKeys) => {
    dispatch({ type: FILTER_BY_PAGE, payload: 1 });
    dispatch({ type: FILTER_BY_CATEGORY, payload: selectedKeys });
  };

  return (
    <div className="filters__category">
      <Tree
        // defaultCheckedKeys={filterCategory}
        // defaultSelectedKeys={filterCategory}
        // onExpand={false}
        // onSelect={onSelect}
        // treeData={result}
        selectable
        onExpand={false}
        onSelect={onSelect}
        selectedKeys={filterCategory}
        treeData={result}
      />
    </div>
  );
}

export default FilterByCategory;
