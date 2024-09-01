import {
  Accordion,
  ActivationCard,
  Badge,
  BannerCallout,
  BannerOverlay,
  BannerSlim,
  BannerUpsell,
  Box,
  Datapoint,
  SideNavigation,
  Text,
} from "gestalt";

const Banners = () => {
  return (
    <Box margin={4} padding={4}>
      <Accordion
        dataTestId="test-accordion"
        icon="lock"
        iconAccessibilityLabel="there is an error"
        id="accordion-test"
        title="Testing"
        type="error"
      >
        <Text>Testing</Text>
      </Accordion>
      <BannerSlim /*dataTestId="banner-slim"*/ message="Banner Slim" />
      <BannerUpsell /*dataTestId="banner-upsell"*/ message="Banner Upsell" />
      <BannerCallout
        //dataTestId="banner-callout"
        message="Banner Callout"
        type={"error"}
      />
      <BannerOverlay /*dataTestId="banner-overlay"*/ message="Banner Overlay" />
      <ActivationCard
        message="Activation card"
        status="notStarted"
        statusMessage={"Status"}
        title={"Title"}
      />
      <Box width="300px" margin={4}>
        <Badge dataTestId="badge" text="Side Nav" type="recommendation" />
        <SideNavigation
          //dataTestId="side-navigation"
          accessibilityLabel="Side Nav"
        >
          <SideNavigation.Group
            label="sn-group"
          >
            <SideNavigation.NestedItem
              href="#"
              label="Luxury Christmas"
              onClick={({ event }: any) => event.preventDefault()}
            />
          </SideNavigation.Group>
        </SideNavigation>
      </Box>
      <Datapoint
        badge={{ text: "Early access" }}
        //dataTestId="data-point"
        title="Title"
        tooltipText="This is a good sign"
        trend={{
          value: 30,
          accessibilityLabel: "Value change icon accessibility label",
        }}
        value="1M"
      />
    </Box>
  );
};

export default Banners;
