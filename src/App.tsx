import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Face } from "./containers/infa/Face";
import { Ideas } from "./containers/infa/Ideas";
import { Contacts } from "./containers/infa/Contacts";
import { Projects } from "./containers/infa/Projects";
import { About } from "./containers/infa/About";
import { Kid } from "./containers/senti/Kid";
import { Navigator } from "./components/Navigator";
import { Typography } from "./components/Typography";

import theme from "./store/theme";

export const App = observer(() => {
  const faceRef = useRef();
  const ideasRef = useRef();
  const contactsRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.remove("theme-business");
    body?.classList.remove("theme-infa");

    body?.classList.add(`${theme.currentTheme}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.currentTheme]);

  return (
    <div className={`App theme-${theme.currentTheme}`}>
      <Navigator
        sections={[
          {
            label: "Above",
            viewElement: faceRef,
          },
          {
            label: "Ideas",
            viewElement: ideasRef,
          },
          {
            label: "Contacts",
            viewElement: contactsRef,
          },
          {
            label: "Projects",
            viewElement: projectsRef,
          },
          {
            label: "About",
            viewElement: aboutRef,
          },
        ]}
        logo={
          <Typography color="active" type="text">
            .HA
          </Typography>
        }
      />
      {theme.currentTheme === "infa" && (
        <>
          <Face ref={faceRef} />
          <Ideas ref={ideasRef} />
          <Contacts ref={contactsRef} />
          <Projects ref={projectsRef} />
          <About ref={aboutRef} />
        </>
      )}
      {theme.currentTheme === "senti" && (
        <>
          <Kid ref={faceRef} />
        </>
      )}
    </div>
  );
});

export default App;
