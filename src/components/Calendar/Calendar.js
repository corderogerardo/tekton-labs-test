import React, { Component } from "react";

import Month from "./Month/Month";
import { getMonthName } from "./CalendarData";
import "./Calendar.scss";

class Calendar extends Component {
  render() {
    const { fullDate, onDayClick } = this.props;

    const dateNumber = fullDate.getDate();
    const monthNumber = fullDate.getMonth();
    const yearNumber = fullDate.getFullYear();
    const monthName = getMonthName(monthNumber);

    return (
      <div className="CalendarContainer">
        <div className="CalendarContainer__Title">{monthName}</div>
        <Month
          date={dateNumber}
          month={monthNumber}
          year={yearNumber}
          onDayClick={onDayClick}
        />
      </div>
    );
  }
}

export default Calendar;
