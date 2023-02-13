import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
import React from "react";

const ActionButton = ({ iconStyle, color, actions, timerStatus }) => (
  <IconButton size="small">
    {(timerStatus === "idle" ||
      timerStatus === "reset" ||
      timerStatus === "done") && (
      <Tooltip title="Start Countdown" aria-label="add">
        <PlayArrowIcon
          style={iconStyle}
          color={color}
          onClick={() => actions.startCountdown()}
        />
      </Tooltip>
    )}
    {timerStatus === "running" && (
      <Tooltip title="Reset Timer to 0" aria-label="add">
        <RefreshIcon
          style={iconStyle}
          color={color}
          onClick={() => actions.resetCountdown()}
        />
      </Tooltip>
    )}
  </IconButton>
);
export default ActionButton;
