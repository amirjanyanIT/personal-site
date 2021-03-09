import { Typography } from "../../Typography";
import { ProPropsInterface } from "./types";

export const Pro = (props: ProPropsInterface) => {
  const { title, imagePath, projectURL, size = 300 } = props;

  const onCardClick = () => {
    window.open(projectURL, "_blank");
  };

  return (
    <div
      className={`pro-card`}
      onClick={() => onCardClick()}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className={`pro-card__theme`}>
        <div className={`pro-card__theme--t`}></div>
        <div className={`pro-card__theme--tr`}></div>
        <div className={`pro-card__theme--b`}></div>
        <div className={`pro-card__theme--bl`}></div>
      </div>
      <div
        className={`pro-card--image`}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      />
      <div className={`pro-card--image-fade`}></div>
      <Typography type="extraTitle" color="inactive">
        {title}
      </Typography>
    </div>
  );
};
