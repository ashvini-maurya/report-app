import React, { Component } from 'react';
import './report.css';

const Report = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Value: {props.value}</h2>
      <h3>Start Date: {props.startDate}</h3>
      <h4>End Date: {props.endDate}</h4>
    </div>
  )
}

export default Report;
