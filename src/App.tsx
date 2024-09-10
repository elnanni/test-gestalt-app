import "./App.css";
import "./gestalt.css";
import { Box, Divider } from "gestalt";
import Header from "./header/Header";
import Content from "./content/Content";

function App() {
  return (
    <Box id="App">
      <Header />
      <Divider />
      <Content />
    </Box>
  );
}

export default App;
