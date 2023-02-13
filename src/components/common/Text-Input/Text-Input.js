import TextField from "@material-ui/core/TextField";
import React from "react";

const TextInput = ({ label, onChange, className, inputStyle, labelStyle }) => {
  return (
    <form className={className} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={onChange}
        inputProps={{ style: inputStyle }}
        InputLabelProps={{ style: labelStyle }}
      />
    </form>
  );
};

export default TextInput;
