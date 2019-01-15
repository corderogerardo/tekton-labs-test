import React from "react";
import PropTypes from 'prop-types';

export default function Weekday({ label, title }) {
  return (
    <div aria-label={label} className="Weekday">
      {title}
    </div>
  );
}

Weekday.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string
};
