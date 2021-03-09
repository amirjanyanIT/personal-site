import { observer } from "mobx-react-lite";
import { TypographyPropsInterface } from "./types";
import theme from "../../store/theme";
export const Typography = observer((props: TypographyPropsInterface) => {
  const {
    fontWeight = "regular",
    type = "text",
    display = "block",
    color = "active",
    children,
    ...rest
  } = props;

  return (
    <p
      className={`t${theme.currentTheme}-typography color--${color} weight--${fontWeight} type--${type} display--${display}`}
      {...rest}
    >
      {children}
    </p>
  );
});
