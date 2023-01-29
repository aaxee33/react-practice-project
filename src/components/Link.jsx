import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  const clickHandler = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a onClick={clickHandler}>{children}</a>;
};

export default Link;
