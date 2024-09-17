"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
});
const PieChart = ({data}: any) => {
  const dataX = {
    labels: data?.labels,
    datasets: [
      {
        label: "Pie Chart",
        data: data?.data,
      },
    ],
  };
  return (
    <div style={{ width: "700px", height: "700px" }}>
      <h1>Example 3: Pie Chart</h1>
      <Pie data={dataX} />
    </div>
  );
};
export default PieChart;
