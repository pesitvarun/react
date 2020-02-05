import React from 'react';
import './Contactstyle.css';
import Chart from "react-google-charts";
const data = [
    ["Task", "Hours per Day"],
    ["India", 11],
    ["US", 2],
    ["Canada", 2],
    ["Nepal", 2],
    ["UK", 7] // CSS-style declaration
  ];
  const options = {
    title: "Analytics",
    pieHole: 0.4,
    is3D: false
  };
const Analytics = ()=> {
    return (
        <div className="App">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    )
}

export default Analytics;