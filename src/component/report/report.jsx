import React, { Component } from 'react';
import './report.css';

const Report = (props) => {
  return (
    <div>
      <h1>Hello World from Report Component</h1>
      <h1>{this.props.name}</h1>
      {/* <h2>{this.props.value}</h2>
      <h3>{this.props.startDate}</h3>
      <h4>{this.props.endDate}</h4> */}
    </div>
  )
}

export default Report;
