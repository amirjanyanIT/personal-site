import { observer } from "mobx-react-lite";
import { createPortal } from "react-dom";
import theme from "../../store/theme";
import suitIMG from "../../images/monster.png";
import monsterIMG from "../../images/suit.png";
export const ThemeSwitcher = observer(() => {
  return createPortal(
    <div
      className={`theme-switcher ${theme.currentTheme}`}
      onClick={() => theme.changeTheme()}
    >
      <div className="one-wave"></div>
      <div className="two-wave"></div>
      <div
        className="img"
        style={{
          backgroundImage: `url(${
            theme.currentTheme === "infa" ? suitIMG : monsterIMG
          })`,
        }}
      />
    </div>,
    document.getElementsByTagName("body")[0]
  );
});
