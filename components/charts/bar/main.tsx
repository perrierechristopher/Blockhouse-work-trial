"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
const BarChart = ({data}: any) => {
  const dataRemapped = {
    labels: data?.labels,
    datasets: [
      {
        label: "Bar Chart",
        data: data?.data,
      },
    ],
  };
  return (
    <div style={{ width: "700px", height: "700px" }}>
      <h1>Example 2: Bar Chart</h1>
      <Bar data={dataRemapped} />
    </div>
  );
};
export default BarChart;
