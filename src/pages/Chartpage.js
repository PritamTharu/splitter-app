import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Expenses", "percentage"],
  ["Travel", 11],
  ["Food", 2],
  ["Shopping", 2],
  ["Others", 7],
];

export const options = {
  title: "Spends Overview For Month",
};

export function Chartpage() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />
  );
}
