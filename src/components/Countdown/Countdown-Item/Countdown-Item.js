import React from "react";
import css from "./Countdown-Item.module.css";

const CountdownItem = ({ value, title }) => {
  return (
    <div>
      {(value || value === 0) && (
        <div className={css.countdown__item}>
          {value}
          <span className={css.countdown__itemTitle}>{title}</span>
        </div>
      )}
    </div>
  );
};

export default CountdownItem;
