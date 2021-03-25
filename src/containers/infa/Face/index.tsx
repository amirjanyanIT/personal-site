import { forwardRef } from "react";
import { Section } from "../../../components/Blocks";
import { Button } from "../../../components/Form";
import { Typography } from "../../../components/Typography";
import { ReactComponent as ScrollSVG } from "../../../images/scroll.svg";

export const Face = forwardRef((_props, ref) => {
  return (
    <Section className="container__face" ref={ref}>
      <div className="container__face__upper">
        <div className="container__face__upper--name">
          <Typography fontWeight="bold" type="extraTitleB">
            HOVHAN
            <Typography
              fontWeight="bold"
              type="extraTitleB"
              display="linear"
              color="inactive"
            >
              NES
            </Typography>
          </Typography>
          <Typography fontWeight="bold" type="extraTitleB">
            AMIRJAN
            <Typography
              fontWeight="bold"
              type="extraTitleB"
              display="linear"
              color="inactive"
            >
              YAN
            </Typography>
          </Typography>
        </div>
        <div className="container__face__upper--person" />
        <div className="container__face__upper__info">
          <Typography fontWeight="bold" type="title">
            SOFTWARE ENGINER
          </Typography>
          <Typography type="text" fontWeight="bold" color="active">
            MAIN
            <Typography color="inactive" display="linear" type="text">
              &nbsp;LIFE HOBBY
            </Typography>
          </Typography>
          <div className="container__face__upper__info--actions">
            <Button variant="outlined">ABOUT ME</Button>
            <Button>CONTACT ME</Button>
          </div>
        </div>
      </div>
      <div className="container__face__under">
        <ScrollSVG />
      </div>
    </Section>
  );
});
