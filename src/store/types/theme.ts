export enum themeType {
  senti,
  infa,
}

export interface themeStoreObject {
  currentTheme: themeType;
  changeTheme: () => themeType;
}
