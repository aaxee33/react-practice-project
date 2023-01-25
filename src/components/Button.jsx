import React from "react";
// import PropTypes from "prop-types";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = className("flex items-center px-3 py-3 border", {
    "border-blue-500 bg-blue-400 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-400 text-white": success,
    "border-yellow-500 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-400 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,
  });

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const number =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (number > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
