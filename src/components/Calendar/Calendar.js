import React, { Component } from "react";
import PropTypes from 'prop-types';

import Month from "./Month/Month";
import { getMonthName } from "./CalendarData";
import "./Calendar.scss";

class Calendar extends Component {
  render() {
    const { fullDate, onDayClick } = this.props;

    let newDate = new Date(fullDate);

    const dateNumber = newDate.getDate();
    const monthNumber = newDate.getMonth();
    const yearNumber = newDate.getFullYear();
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

Calendar.propTypes = {
  fullDate: PropTypes.string,
  onDayClick: PropTypes.func,
};

export default Calendar;
