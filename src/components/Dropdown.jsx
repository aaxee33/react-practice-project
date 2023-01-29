import React, { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [dropdown, setDropdown] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = () => {
      console.log(divEl.current);
    };

    document.addEventListener("click", handler, true);
  }, []);

  const clickHandler = () => {
    setDropdown(() => !dropdown);
  };

  const optionClickHandler = (option) => {
    setDropdown(() => false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <Panel
        className="hover:bg-blue-100 rounded cursor-pointer p-1"
        onClick={() => optionClickHandler(option)}
        key={option.value}
      >
        {option.label}
      </Panel>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={clickHandler}
      >
        {value?.label || "Select..."}
      </div>
      {dropdown && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
