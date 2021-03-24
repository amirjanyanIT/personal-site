import { makeAutoObservable } from "mobx";
import { themeStoreObject, themeType } from "./types/theme";

class Theme implements themeStoreObject {
  currentTheme: themeType = "business";
  constructor() {
    makeAutoObservable(this);
  }
  changeTheme() {
    return this.currentTheme === "infa" ? "business" : "infa";
  }
}

export default new Theme();
