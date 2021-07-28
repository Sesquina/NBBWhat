import ApexCharts from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const seriesArray = [
    {
      name: "Year 1",
      data: [1, 1],
    },
    {
      name: "Year 3",
      data: [3],
    },
    {
      name: "Year 5",
      data: [5],
    },
    {
      name: "Year 8",
      data: [8],
    },
  ];

  const [series, setSeries] = useState(seriesArray);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { tools: { download: false } },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    stroke: {
      width: 2,
      colors: ["#fff"],
    },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Capital Group", "Industry Standard"],
      labels: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
    },
    colors: ["#7BD0E2", "#009CDC", "#0057A5", "#003E78"],
    fill: {
      type: "solid",
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
