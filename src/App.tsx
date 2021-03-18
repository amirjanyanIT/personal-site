import { observer } from "mobx-react-lite";
import { Face } from "./containers/business/Face";
import { Ideas } from "./containers/business/Ideas";
import { Contacts } from "./containers/business/Contacts";
import { Projects } from "./containers/business/Projects";
import { About } from "./containers/business/About";
import theme from "./store/theme";
import { Navigator } from "./components/Navigator";
import { useRef } from "react";

export const App = observer(() => {
  const faceRef = useRef();
  const ideasRef = useRef();
  const contactsRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
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
        logo="Hello World"
      />
      <Face ref={faceRef} />
      <Ideas ref={ideasRef} />
      <Contacts ref={contactsRef} />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
    </div>
  );
});

export default App;
