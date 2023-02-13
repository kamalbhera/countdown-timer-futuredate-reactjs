import React from "react";
import Datetime from "react-datetime";
import "./react-datetime.css";

const DatetimeInput = ({
  className,
  datetimeSelected,
  changeDatetimeSelected,
}) => {
  return (
    <div className={className}>
      <Datetime
        value={datetimeSelected}
        onChange={changeDatetimeSelected}
        dateFormat="DD/MM/YYYY"
      />
    </div>
  );
};

export default DatetimeInput;
