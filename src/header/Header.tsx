import { Box, Flex } from "gestalt";
import Logo from "./Logo";
import Slogan from "./Slogan";

const Header = () => {
  return (
    <Box color="lightWash" data-test-id="app-header" width="100%">
      <Flex justifyContent="center">
        <Logo />
      </Flex>
      <Flex justifyContent="center">
        <Slogan />
      </Flex>
    </Box>
  );
};

export default Header;
