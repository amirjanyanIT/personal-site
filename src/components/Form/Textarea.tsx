import { useRef } from "react";
import { TextareaPropsInterface } from "./types/Textarea";
import { v4 as uuidv4 } from "uuid";

export const Textarea = (props: TextareaPropsInterface) => {
  const { current: inputId } = useRef(uuidv4());
  const { label, onChange, value, ...rest } = props;
  return (
    <div className="textarea">
      <label htmlFor={inputId}>{label}</label>
      <textarea id={inputId} {...rest}>
        {value}
      </textarea>
    </div>
  );
};
