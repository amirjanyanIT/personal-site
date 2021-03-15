import { observer } from "mobx-react-lite";
import { Face } from "./containers/business/Face";
import { Ideas } from "./containers/business/Ideas";
import { Contacts } from "./containers/business/Contacts";
import { Projects } from "./containers/business/Projects";
import { About } from "./containers/business/About";
import theme from "./store/theme";

export const App = observer(() => {
  return (
    <div className={`App theme-${theme.currentTheme}`}>
      <Face />
      <Ideas />
      <Contacts />
      <Projects />
      <About />
    </div>
  );
});

export default App;
