import { Box, Link, Text } from "gestalt";

const Slogan = () => {
  return (
    <Box
      marginTop={4}
      padding={2}
      data-test-id="header-content"
      display="inlineBlock"
    >
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
        </Link>
        !
      </Text>
    </Box>
  );
};

export default Slogan;
