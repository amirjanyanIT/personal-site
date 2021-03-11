import { observer } from "mobx-react-lite";
import { Container } from "./components/Blocks";
import theme from "./store/theme";
export const App = observer(() => {
  return (
    <div className={`App theme-${theme.currentTheme}`}>
      <Container>Hello World</Container>
    </div>
  );
});

export default App;
