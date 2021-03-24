export type themeType = "business" | "infa";

export interface themeStoreObject {
  currentTheme: themeType;
  changeTheme: () => themeType;
}
