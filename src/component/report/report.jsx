import React, { Component } from 'react';
import './report.css';

import { PieChart, Pie } from 'recharts';

const Report = (props) => {
  const data = [{ name: 'Value', value: parseInt(props.value) }, { name: 'Left', value: (100 - parseInt(props.value)) }];

  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" startAngle={90} endAngle={-270} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#DDAABB" label />
      </PieChart>

      <h1>Name: {props.name}</h1>
      <h2>Value: {props.value}</h2>
      <h3>Start Date: {props.startDate}</h3>
      <h4>End Date: {props.endDate}</h4>
    </div>
  )
}

export default Report;
