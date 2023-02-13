import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";

const HelpIconComponent = ({ title, iconStyle }) => (
  <Tooltip title={title}>
    <HelpIcon style={iconStyle} />
  </Tooltip>
);

export default HelpIconComponent;
