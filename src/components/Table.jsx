import React, { Fragment } from "react";

const Table = ({ fruits, configs }) => {
  const headersRendered = configs.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th className=" p-2" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedData = fruits.map((fruit) => {
    const renderedCells = configs.map((column) => (
      <td className="p-2" key={column.label}>
        {column.render(fruit)}
      </td>
    ));
    return (
      <tr key={fruit.name} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{headersRendered}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
};

export default Table;
