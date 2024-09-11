import { Badge, Box, Tabs } from "gestalt";
import { useState } from "react";

type props = {
  setParentActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ContentTabs = ({ setParentActiveIndex }: props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Tabs
      // dataTestId="options-tabs"
      bgColor="transparent"
      activeTabIndex={activeIndex}
      onChange={({ activeTabIndex, event }: any) => {
        event.preventDefault();
        setActiveIndex(activeTabIndex);
        setParentActiveIndex(activeTabIndex);
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
  );
};

export default ContentTabs;
