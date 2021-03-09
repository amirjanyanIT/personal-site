import { observer } from "mobx-react-lite";
import { useElipsis } from "../../../hooks/useElipsis";
import theme from "../../../store/theme";
import { Typography } from "../../Typography";
import { IdePropsInterface } from "./types";

export const Ide = observer((props: IdePropsInterface) => {
  const { title, content, gifURL } = props;

  const EContent: string = useElipsis(content, 300);

  return (
    <div className={`t${theme.currentTheme}-ide-card`}>
      <div className={`t${theme.currentTheme}-ide-card--block`}>
        <Typography color="active" type="title">
          {title}
        </Typography>
        <Typography color="inactive" type="text">
          {EContent}
        </Typography>
      </div>
      <div className={`t${theme.currentTheme}-ide-card--block`}>
        <div className={`t${theme.currentTheme}-ide-card--imgContainer`}>
          <img src={gifURL} alt="" />
        </div>
      </div>
    </div>
  );
});
