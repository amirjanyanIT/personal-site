export type buttonColor = "primary" | "secondary";
export type buttonType = "filled" | "outlined";

export interface ButtonPropsInterface {
  color?: buttonColor;
  variant?: buttonType;
  children: string;
  [prop: string]: any;
}
