import logo from "./gestalteers.png";
import { Box, ButtonLink, Image, Link, Text, WashAnimated } from "gestalt";

const Header = () => {
  return (
    <Box id="App-header">
      <Box>
        <Box id="logo-container" height={300} width={200} display="inlineBlock">
          <WashAnimated
            image={
              <Image
                src={logo}
                alt="logo"
                naturalHeight={50}
                naturalWidth={50}
              />
            }
          >
            <Text dataTestId="gestalt-volunteers" align="center">
              Gestalt Volunteers!
            </Text>
            <ButtonLink
              href="https://github.com/elnanni/gestalt/tree/makeathonDataTestId"
              target="blank"
              dataTestId="volunteers-fork"
              iconEnd="visit"
              accessibilityLabel="Volunteers fork"
              color="red"
              text="Volunteers fork"
            />
          </WashAnimated>
        </Box>
      </Box>
      <Box marginTop={4} padding={2} id="header-content" display="inlineBlock">
        <Text dataTestId="gestalt-volunteers-implementation">
          This is our awesome implementation test for{" "}
          <Link
            dataTestId="gestalt-link"
            externalLinkIcon="default"
            target="blank"
            accessibilityLabel="Gestalt"
            display="inline"
            href={"https://gestalt.pinterest.systems/web/overview"}
          >
            Gestalt
          </Link>{" "}
          !
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
