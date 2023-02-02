import React, { useState } from "react";
import Table from "./Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { configs, fruits } = props;

  const clickHandler = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = configs.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-grey-100"
          onClick={() => clickHandler(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //only sort data if sortOrder && sortby are not null
  //make a copy of the 'prop' array
  //find the correct sortOrder function and use it for sorting

  let sortedData = fruits;

  if (sortOrder && sortBy) {
    const { sortValue } = configs.find((column) => column.label === sortBy);
    // console.log(sortValue);
    sortedData = [...fruits].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      //   console.log(valueA, valueB);

      const reverseSort = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseSort;
      } else {
        return (valueA - valueB) * reverseSort;
      }
    });
    console.log(sortedData);
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} configs={updatedConfig} fruits={sortedData} />;
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  }
};

export default SortableTable;
