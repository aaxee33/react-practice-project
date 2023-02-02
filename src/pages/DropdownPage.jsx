import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const selectionHandler = (option) => {
    setSelection(option);
    console.log(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Pink", value: "pink" },
  ];

  return (
    <Dropdown onChange={selectionHandler} value={selection} options={options} />
  );
};

export default DropdownPage;
