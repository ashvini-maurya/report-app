import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: 1,
      startDate: '',
      endDate: '',
      formSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, value, startDate, endDate} = this.state;
    console.log("Name: " + name);
    console.log("Value: " + value);
    console.log("Start Date: " + startDate);
    console.log("End Date:" + endDate);

    this.setState({
      formSubmit: true
    });

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Report App</h1>
        </header>
        <br/><br/>
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
            State Date:
          <input type="date" name="startDate" onChange={this.handleChange} />
          </label>

          <label>
            End Date:
          <input type="date" name="endDate" onChange={this.handleChange} />
          </label>

          <p>{this.props.name}</p>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
