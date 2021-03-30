import { forwardRef } from "react";
import { Section } from "../../../components/Blocks";
import { Typography } from "../../../components/Typography";

export const About = forwardRef((_props, ref) => {
  return (
    <Section className="container__about" ref={ref}>
      <Typography type="extraTitle" color="inactive">
        Little Bit About Me
      </Typography>
    </Section>
  );
});
