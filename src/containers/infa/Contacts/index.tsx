import { forwardRef } from "react";
import { Section } from "../../../components/Blocks";
import { Soc } from "../../../components/Cards/Soc";
import { Button, Input, Textarea } from "../../../components/Form";
import { Typography } from "../../../components/Typography";

export const Contacts = forwardRef((_props, ref) => {
  return (
    <Section className="container__contacts" ref={ref}>
      <Typography
        fontWeight="bold"
        type="extraTitle"
        className="container__contacts--title"
      >
        CONTACTS
      </Typography>
      <Typography
        fontWeight="bold"
        type="title"
        color="inactive"
        className="container__contacts--title"
      >
        THERE IS LOT OF WAYS TO CONTACT ME
      </Typography>
      <div className="container__contacts--block">
        <div className="container__contacts--form">
          <Typography type="title">
            FILL&nbsp;
            <Typography type="title" display="linear" color="inactive">
              SIMPLE FORM
            </Typography>
          </Typography>
          <form>
            <Input
              type="email"
              label="EMAIL"
              onChange={() => {}}
              value={null}
            />
            <Textarea
              label="MESSAGE"
              rows={18}
              onChange={() => {}}
              value={null}
            />
            <Button>SEND</Button>
          </form>
        </div>
        <div className="container__contacts--social">
          <Typography type="title">
            PM ME&nbsp;
            <Typography type="title" display="linear" color="inactive">
              IN SOCIAL
            </Typography>
          </Typography>
          <div className="container__contacts--social-list">
            <Soc
              iconPath="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png"
              name="Facebook"
              size={300}
              url="https://www.facebook.com"
            />
            <Soc
              iconPath="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png"
              name="Facebook"
              size={300}
              url="https://www.facebook.com"
            />
            <Soc
              iconPath="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png"
              name="Facebook"
              size={300}
              url="https://www.facebook.com"
            />
            <Soc
              iconPath="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png"
              name="Facebook"
              size={300}
              url="https://www.facebook.com"
            />
          </div>
        </div>
      </div>
    </Section>
  );
});
