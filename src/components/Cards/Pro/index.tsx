import { observer } from "mobx-react-lite";
import theme from "../../../store/theme";
import { Typography } from "../../Typography";
import { ProPropsInterface } from "./types";

export const Pro = observer((props: ProPropsInterface) => {
  const { title, imagePath, projectURL, size = 300 } = props;

  const onCardClick = () => {
    window.open(projectURL, "_blank");
  };

  return (
    <div
      className={`t${theme.currentTheme}-pro-card`}
      onClick={() => onCardClick()}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className={`t${theme.currentTheme}-pro-card__theme`}>
        <div className={`t${theme.currentTheme}-pro-card__theme--t`}></div>
        <div className={`t${theme.currentTheme}-pro-card__theme--tr`}></div>
        <div className={`t${theme.currentTheme}-pro-card__theme--b`}></div>
        <div className={`t${theme.currentTheme}-pro-card__theme--bl`}></div>
      </div>
      <div
        className={`t${theme.currentTheme}-pro-card--image`}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      />
      <div className={`t${theme.currentTheme}-pro-card--image-fade`}></div>
      <Typography type="extraTitle" color="inactive">
        {title}
      </Typography>
    </div>
  );
});
