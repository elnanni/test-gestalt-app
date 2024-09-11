import { Link, Text } from "gestalt";

const Slogan = () => {
  return (
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
  );
};

export default Slogan;
