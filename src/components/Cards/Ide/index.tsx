import { useElipsis } from "../../../hooks/useElipsis";
import { Typography } from "../../Typography";
import { IdePropsInterface } from "./types";

export const Ide = (props: IdePropsInterface) => {
  const { title, content, gifURL } = props;

  const EContent: string = useElipsis(content, 300);

  return (
    <div className={`ide-card`}>
      <div className={`ide-card--block`}>
        <Typography color="active" type="title">
          {title}
        </Typography>
        <Typography color="inactive" type="text">
          {EContent}
        </Typography>
      </div>
      <div className={`ide-card--block`}>
        <div className={`ide-card--imgContainer`}>
          <img src={gifURL} alt="" />
        </div>
      </div>
    </div>
  );
};
