import logo from "../gestalteers.png";
import { Box, WashAnimated, Image, Text, ButtonLink, Flex } from "gestalt";

const Logo = () => {
  return (
    <Box>
      <Box display="inlineBlock" marginTop={2}>
        <Flex
          justifyContent="center"
          alignContent="center"
          height={230}
          width={200}
        >
          <WashAnimated
            image={
              <Image
                dataTestId="logo"
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
              href="https://github.com/elnanni/gestalt/"
              target="blank"
              dataTestId="volunteers-fork"
              iconEnd="visit"
              accessibilityLabel="Volunteers fork"
              color="red"
              text="Volunteers fork"
            />
          </WashAnimated>
        </Flex>
      </Box>
    </Box>
  );
};

export default Logo;
