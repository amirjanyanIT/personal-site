export interface InputPropsInterface {
  label: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  [prop: string]: any;
}
