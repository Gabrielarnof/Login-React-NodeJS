import React from "react";
import { StyledInput } from "./style";

function Input({ ...props }) {
  return <StyledInput> {...props}</StyledInput>;
}

export default Input;
