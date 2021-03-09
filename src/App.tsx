import { observer } from "mobx-react-lite";
import theme from "./store/theme";
export const App = observer(() => {
  return <div className={`App theme-${theme.currentTheme}`}></div>;
});

export default App;
