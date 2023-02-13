import React from "react";
import ActionButton from "../common/Buttons/Action-Button";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";
import EventNameInput from "../common/Text-Input/Text-Input";
import * as style from "./Inputs.style";
import css from "./Inputs.module.css";

export const Inputs = ({
  changeEventName,
  datetimeSelected,
  changeDatetimeSelected,
  actions,
  timerStatus,
}) => {
  return (
    <div className={css.inputs}>
      <EventNameInput
        className={css.input_item}
        label="Event Name"
        onChange={changeEventName}
        inputStyle={style.eventInputStyle}
        labelStyle={style.eventInputLabelStyle}
      />
      <DatetimeInput
        className={css.input_item}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
      />
      <div className={css.input_actionButton}>
        <ActionButton
          iconStyle={style.actionIconStyle}
          actions={actions}
          timerStatus={timerStatus}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Inputs;
