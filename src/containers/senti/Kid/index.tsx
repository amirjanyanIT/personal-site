import { forwardRef } from "react";
import { Section } from "../../../components/Blocks";
import { Button } from "../../../components/Form";
import { Typography } from "../../../components/Typography";
import KidGif from "../../../images/kid.gif";
export const Kid = forwardRef((_props, ref) => {
  return (
    <Section className="container__kid" ref={ref}>
      <div>
        <Typography>Hi my name is ↓↓</Typography>
        <Typography style={{ textDecoration: "underline" }}>
          Hovhannes Amirjanyan
        </Typography>
        <Typography>I am Software Enginner</Typography>
        <div className="actions">
          <Button>CONTACT ME</Button>
          <Button>ABOUT ME</Button>
        </div>
      </div>
      <div>
        <img src={KidGif} alt="" />
      </div>
    </Section>
  );
});
