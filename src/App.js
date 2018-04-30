import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Report from './component/report';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: 1,
      startDate: null,
      endDate: null,
      formSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    });
  }

  render() {
    const { name, value, startDate, endDate } = this.state;
    if (this.state.formSubmitted) {
      return <Report name={name} value={value} startDate={startDate} endDate={endDate} />
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Report App</h1>
          </header>
          <br /><br />
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Value:
              <input type="number" name="value" min={1} max={100} onChange={this.handleChange} />
            </label>
            <label>
              Select Date:
              <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
              />
            </label>
            <p>{this.props.name}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default App;
