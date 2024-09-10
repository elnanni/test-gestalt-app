import { Box } from "gestalt";
import Logo from "./Logo";
import Slogan from "./Slogan";

const Header = () => {
  return (
    <Box color="lightWash" data-test-id="app-header">
      <Logo />
      <Slogan />
    </Box>
  );
};

export default Header;
