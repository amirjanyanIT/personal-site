import { Typography } from "../../Typography";
import { SkillPropsInterface } from "./types";

export const Skill = (props: SkillPropsInterface) => {
  const { filledPercent, icon, skillName } = props;

  return (
    <div className="skill-card">
      <div
        className="skill-card--icon"
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <div className="skill-card--block">
        <Typography type="text" color="inactive">
          {skillName} ({filledPercent}%)
        </Typography>
        <div className="skill-card__progress-bar">
          <div
            className="skill-card__progress-bar--filled"
            style={{
              width: `${filledPercent}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
