"use client";
import React from "react";

import dynamic from "next/dynamic";
import "chart.js/auto";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = ({data}: any) => {

  const dataRemapped = {
    labels: data?.labels,
    datasets: [
      {
        label: "Line Chart",
        data: data?.data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: "700px", height: "700px" }}>
      <h1>Example 1: Line Chart</h1>
      <Line data={dataRemapped} />
    </div>
  );
};
export default LineChart;
