import { makeAutoObservable } from "mobx";
import { themeStoreObject, themeType } from "./types/theme";

class Theme implements themeStoreObject {
  currentTheme: themeType = "senti";

  constructor() {
    makeAutoObservable(this);
  }

  changeTheme() {
    if (this.currentTheme === "infa") {
      this.currentTheme = "senti";
    } else {
      this.currentTheme = "infa";
    }
  }
}

export default new Theme();
