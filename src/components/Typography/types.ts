export type TypographyType = "extraTitle" | "title" | "text";
export type TypographyFontWeight = "regular" | "bold";
export type TypographyDisplay = "linear" | "block";
export type TypographyColor = "active" | "inactive";
export interface TypographyPropsInterface {
  type?: TypographyType;
  fontWeight?: TypographyFontWeight;
  display?: TypographyDisplay;
  color?: TypographyColor;
  children: any;
  [prop: string]: any;
}
