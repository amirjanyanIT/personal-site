import { Typography } from "../../Typography";
import { SocPropsInterface } from "./types";

export const Soc = (props: SocPropsInterface) => {
  const { iconPath, name, url, size } = props;

  const onSocCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="soc-card"
      onClick={() => onSocCardClick()}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="soc-card__block">
        <div className="soc-card__block__icon">
          <div
            className="soc-card__block__icon--image"
            style={{
              backgroundImage: `url(${iconPath})`,
            }}
          ></div>
        </div>
      </div>
      <Typography>{name}</Typography>
    </div>
  );
};
