import { Badge, Box, Pog, Tabs } from "gestalt";
import { useState } from "react";
import Images from "./Images";
import Banners from "./Banners";
import Randoms from "./Randoms";
import PersonalData from "./PersonalData";
import PersonalAvatar from "./PersonalAvatar";

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      data-test-id="app-content"
      justifyContent="center"
      color="lightWash"
      margin={1}
      padding={4}
      minHeight="65vh"
      width="100%"
    >
      <Box display="inlineBlock">
        <PersonalAvatar />
        <Tabs
          // dataTestId="options-tabs"
          bgColor="transparent"
          activeTabIndex={activeIndex}
          onChange={({ activeTabIndex, event }: any) => {
            event.preventDefault();
            setActiveIndex(activeTabIndex);
          }}
          tabs={[
            { href: "#", text: "Personal data" },
            { href: "#", text: "Images" },
            {
              href: "#",
              text: (
                <Box>
                  Banners{" "}
                  <Badge
                    dataTestId="badge-new"
                    text="New"
                    type="recommendation"
                    tooltip={{ text: "New" }}
                  />
                </Box>
              ),
            },
            { href: "#", text: "Randoms" },
          ]}
        />
      </Box>
      <Box color="light">
        {activeIndex === 0 && <PersonalData />}
        {activeIndex === 1 && <Images />}
        {activeIndex === 2 && <Banners />}
        {activeIndex === 3 && <Randoms />}
      </Box>
      <Box margin={2} justifyContent="end" alignContent="end" display="flex">
        <Pog dataTestId="pog-heart" icon="heart" />
      </Box>
    </Box>
  );
};

export default Content;
