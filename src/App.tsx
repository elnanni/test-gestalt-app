import "./gestalt.css";
import { Flex } from "gestalt";
import Header from "./header/Header";
import Content from "./content/Content";

function App() {
  return (
    <Flex dataTestId="main-container" alignItems="center" direction="column">
      <Header />
      <Content />
    </Flex>
  );
}

export default App;
