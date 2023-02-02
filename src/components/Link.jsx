import classNames from "classnames";
import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const clickHandler = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={clickHandler}>
      {children}
    </a>
  );
};

export default Link;
