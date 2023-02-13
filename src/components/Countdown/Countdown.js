import React from "react";
import CountdownItem from "./Countdown-Item/Countdown-Item";
import css from "./Countdown.module.css";

const Countdown = ({ timeLeft }) => {
  return (
    <div className={css.countdown}>
      {timeLeft.years > 0 && (
        <CountdownItem value={timeLeft.years} title="YEARS" />
      )}
      {timeLeft.months > 0 && (
        <CountdownItem value={timeLeft.months} title="MONTHS" />
      )}
      <CountdownItem value={timeLeft.days} title="DAYS" />
      <CountdownItem value={timeLeft.hours} title="HOURS" />
      <CountdownItem value={timeLeft.minutes} title="MINUTES" />
      <CountdownItem value={timeLeft.seconds} title="SECONDS" />
    </div>
  );
};

export default Countdown;
