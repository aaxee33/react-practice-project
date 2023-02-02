import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 4 },
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 1 },
  ];

  const configs = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 b-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
    },
  ];
  return (
    <div>
      <Table fruits={fruits} configs={configs} />
    </div>
  );
};

export default TablePage;
