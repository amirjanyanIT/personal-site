import { observer } from "mobx-react-lite";
import { InputPropsInterface } from "./types/Input";
import { v4 as uuidv4 } from "uuid";
import theme from "../../modules/store/theme";
import { useRef } from "react";

export const Input = observer((props: InputPropsInterface) => {
  const { label, ...rest } = props;
  const { current: inputId } = useRef(uuidv4());
  return (
    <div className={`t${theme.currentTheme}-input`}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...rest} />
    </div>
  );
});
