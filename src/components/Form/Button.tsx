import { ButtonPropsInterface } from "./types/Button";

export const Button = (props: ButtonPropsInterface) => {
  const { variant = "filled", color = "primary", children, ...rest } = props;
  return (
    <button {...rest} className={`button ${variant}--${color}`}>
      {children}
    </button>
  );
};
