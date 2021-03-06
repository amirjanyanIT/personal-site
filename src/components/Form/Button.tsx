import { observer } from "mobx-react-lite";
import { ButtonPropsInterface } from "./types/Button";
import theme from "../../modules/store/theme";
export const Button = observer((props: ButtonPropsInterface) => {
  const { variant = "filled", color = "primary", children, ...rest } = props;
  return (
    <button
      {...rest}
      className={`t${theme.currentTheme}-button ${variant}--${color}`}
    >
      {children}
    </button>
  );
});
