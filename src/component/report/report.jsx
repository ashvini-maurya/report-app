import React, { Component } from 'react';
import './report.css';

import { PieChart, Pie } from 'recharts';

const Report = (props) => {
  const data = [{ name: 'Value', value: parseInt(props.value) }, { name: 'Left', value: (100 - parseInt(props.value)) }];

  return (
    <div className="report">
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" startAngle={90} endAngle={-270} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#DDAABB" label />
      </PieChart>

      <h1>Name:</h1> {props.name}
      <h2>Value:</h2> {props.value}
      <h4>Start Date:</h4> {props.startDate._d.toDateString().toString()}
      <h4>End Date:</h4> {props.endDate._d.toDateString().toString()}
    </div>
  )
}

export default Report;
