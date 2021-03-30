import { forwardRef } from "react";
import { Section } from "../../../components/Blocks";
import { Button } from "../../../components/Form";
import { Typography } from "../../../components/Typography";
import KidGif from "../../../images/kid.gif";
export const Kid = forwardRef((_props, ref) => {
  return (
    <Section className="container__kid" ref={ref}>
      <div className="container__kid--contact">
        <Typography type="extraTitle" color="inactive">
          Hi my name is ↓↓
        </Typography>
        <Typography
          type="extraTitleB"
          color="inactive"
          style={{ textDecoration: "underline" }}
        >
          Hovhannes Amirjanyan
        </Typography>
        <Typography type="extraTitleB" color="inactive">
          I am Software Enginner
        </Typography>
        <div className="actions">
          <Button color="primary" variant="filled">
            CONTACT ME
          </Button>
          <Button color="secondary" variant="outlined">
            ABOUT ME
          </Button>
        </div>
      </div>
      <div className="container__kid--gif-container">
        <div
          style={{
            backgroundImage: `url(${KidGif})`,
          }}
        />
      </div>
    </Section>
  );
});
