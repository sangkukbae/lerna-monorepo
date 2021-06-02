import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = ({ type, disabled, children }) => (
  <MuiButton variant="contained" color={type} disabled={disabled}>
    {children}
  </MuiButton>
);

export default Button;
