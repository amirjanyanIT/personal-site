import { useElipsis } from "../../../hooks/useElipsis";
import { Typography } from "../../Typography";
import { IdePropsInterface } from "./types";

export const Ide = (props: IdePropsInterface) => {
  const { title, content, gif } = props;

  const EContent: string = useElipsis(content, 300);

  return (
    <div className={`ide-card`}>
      <div className={`ide-card--block`}>
        <Typography color="active" type="title">
          {title}
        </Typography>
        <Typography color="inactive" type="smallText">
          {EContent}
        </Typography>
      </div>
      <div className={`ide-card--block`}>
        <div className={`ide-card--imgContainer`}>
          <img src={gif} alt="" />
        </div>
      </div>
    </div>
  );
};
