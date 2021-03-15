import { TypographyPropsInterface } from "./types";

export const Typography = (props: TypographyPropsInterface) => {
  const {
    fontWeight = "regular",
    type = "text",
    display = "block",
    color = "active",
    className = "",
    children,
    ...rest
  } = props;

  if (display === "linear") {
    return (
      <span
        className={`typography color--${color} weight--${fontWeight} type--${type} display--${display} ${className}`}
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <p
      className={`typography color--${color} weight--${fontWeight} type--${type} display--${display} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};
