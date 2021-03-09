import { InputPropsInterface } from "./types/Input";
import { v4 as uuidv4 } from "uuid";

import { useRef } from "react";

export const Input = (props: InputPropsInterface) => {
  const { label, ...rest } = props;
  const { current: inputId } = useRef(uuidv4());
  return (
    <div className={`input`}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...rest} />
    </div>
  );
};
