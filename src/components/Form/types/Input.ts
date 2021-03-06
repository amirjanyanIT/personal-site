export interface InputPropsInterface {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  [prop: string]: any;
}
