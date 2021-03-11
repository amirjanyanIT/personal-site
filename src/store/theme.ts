import { makeAutoObservable } from "mobx";
import { themeStoreObject, themeType } from "./types/theme";

class Theme implements themeStoreObject {
  currentTheme: themeType = themeType.business;
  constructor() {
    makeAutoObservable(this);
  }
  changeTheme() {
    if (this.currentTheme === themeType.business) {
      this.currentTheme = themeType.infa;
    } else {
      this.currentTheme = themeType.business;
    }
    return this.currentTheme;
  }
}

export default new Theme();
