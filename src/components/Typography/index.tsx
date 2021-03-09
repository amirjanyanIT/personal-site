import { TypographyPropsInterface } from "./types";

export const Typography = (props: TypographyPropsInterface) => {
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
      className={`typography color--${color} weight--${fontWeight} type--${type} display--${display}`}
      {...rest}
    >
      {children}
    </p>
  );
};
