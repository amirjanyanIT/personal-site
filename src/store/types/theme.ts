export type themeType = "senti" | "infa";

export interface themeStoreObject {
  currentTheme: themeType;
  changeTheme: () => void;
}
