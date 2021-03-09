import { makeAutoObservable } from "mobx";
import { themeStoreObject, themeType } from "./types/theme";

class Theme implements themeStoreObject {
  currentTheme: themeType = themeType.senti;
  constructor() {
    makeAutoObservable(this);
  }
  changeTheme() {
    if (this.currentTheme === themeType.senti) {
      this.currentTheme = themeType.infa;
    } else {
      this.currentTheme = themeType.senti;
    }
    return this.currentTheme;
  }
}

export default new Theme();
