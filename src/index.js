import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      workDays: 0,
      countryCode: []
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleWorkDaysChange = this.handleWorkDaysChange.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
  }

  handleDateChange(e){
    this.setState({startDate: e.target.value})
  }

  handleWorkDaysChange(e){
    this.setState({startDate: e.target.value})
  }

  showCalendar(){
    console.log("click showCalendar");
  }

  render() {
    let localDateFunction = () => {
      let local = new Date();
      local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
      return local.toJSON().slice(0,10);
    };
    return (
      <div className='App'>
        <h1>Tekton Labs WorkDays and Holidays Calendar in React</h1>
        <div className="MainContainer">
          <div className="StartDate">
            <input type="date"
                   id="startDate"
                   value={
                     (this.state.startDate == null) ? localDateFunction() : this.state.startDate
                   }
                   onChange={this.handleDateChange}/>
          </div>
          <div className="Days">
            <input type="text"/>
          </div>
          <div className="CountryCode">
            <select name="countryCode" id="countryCode">
              <option value="select country">Select Country Code</option>
            </select>
          </div>
          <button onClick={this.showCalendar}>Submit</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);
