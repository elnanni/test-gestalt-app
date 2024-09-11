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
  IconButton,
  Popover,
  SideNavigation,
  Text,
} from "gestalt";
import { useRef, useState } from "react";

const Banners = () => {
  const [showPopover, setShowPopover] = useState(false);
  const anchorRef = useRef(null);
  return (
    <Box margin={4} padding={4}>
      <Box padding={3}>
        <Accordion
          dataTestId="test-accordion"
          icon="lock"
          iconAccessibilityLabel="there is an error"
          id="accordion-test"
          title="Testing Accordion"
          type="error"
        >
          <Text>Testing</Text>
        </Accordion>
      </Box>
      <Box padding={3}>
        <Accordion
          badge={{ text: "New", type: "info" }}
          dataTestId="test-badge-accordion"
          id="accordion-test"
          title="Testing Badge in Accordion"
          type="error"
        >
          <Text>Testing</Text>
        </Accordion>
      </Box>
      <Box padding={3}>
        <Accordion
          dataTestId="test-iconbutton-accordion"
          id="accordion-test"
          title="Testing IconButton in Accordion"
          type="error"
          iconButton={
            <IconButton
              ref={anchorRef}
              accessibilityLabel="Get help"
              bgColor="lightGray"
              dataTestId="accordion-icon-button"
              icon="question-mark"
              iconColor="darkGray"
              onClick={() => {
                setShowPopover((currVal) => !currVal);
              }}
              size="xs"
            />
          }
        >
          <Text>Testing</Text>
        </Accordion>
      </Box>
      {showPopover && (
        <Box padding={3}>
          <Popover
            anchor={anchorRef.current}
            idealDirection="right"
            onDismiss={() => setShowPopover(false)}
            shouldFocus={false}
          >
            <Box padding={3}>
              <Text dataTestId="accordion-popover-text" weight="bold">
                Help content!
              </Text>
            </Box>
          </Popover>
        </Box>
      )}
      <Box padding={3}>
        <BannerSlim /* dataTestId="banner-slim" */ message="Banner Slim" />
      </Box>
      <Box padding={3}>
        <BannerUpsell /* dataTestId="banner-upsell" */ message="Banner Upsell" />
      </Box>
      <Box padding={3}>
        <BannerCallout
          // dataTestId="banner-callout"
          message="Banner Callout"
          type={"error"}
        />
      </Box>
      <Box padding={3}>
        <BannerOverlay
          /* dataTestId="banner-overlay" */ message="Banner Overlay"
        />
      </Box>
      <Box padding={3}>
        <ActivationCard
          message="Activation card"
          status="notStarted"
          statusMessage={"Status"}
          title={"Title"}
        />
      </Box>
      <Box width="300px" margin={4}>
        <Badge dataTestId="badge" text="Side Nav" type="recommendation" />
        <SideNavigation
          // dataTestId="side-navigation"
          accessibilityLabel="Side Nav"
        >
          <SideNavigation.Group label="sn-group">
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
        // dataTestId="data-point"
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
