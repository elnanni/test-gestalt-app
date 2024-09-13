import { Box, Pog } from "gestalt";
import { useState } from "react";
import PersonalAvatar from "./PersonalAvatar";
import ContentTabs from "./ContentTabs";
import ActiveContent from "./ActiveContent";

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
        <ContentTabs setParentActiveIndex={setActiveIndex} />
      </Box>
      <Box color="light" margin={2}>
        <ActiveContent index={activeIndex} />
      </Box>
      <Box margin={2} justifyContent="end" alignContent="end" display="flex">
        <Pog dataTestId="pog-heart" icon="heart" />
      </Box>
    </Box>
  );
};

export default Content;
