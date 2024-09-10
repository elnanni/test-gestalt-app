import {
  Box,
  Button,
  CompositeZIndex,
  Dropdown,
  FixedZIndex,
  Flex,
  Heading,
  Icon,
  IconButton,
  IconButtonFloating,
  Label,
  List,
  Modal,
  OverlayPanel,
  Popover,
  PopoverEducational,
  RadioGroup,
  Text,
} from "gestalt";
import { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";

const Randoms = () => {
  const PAGE_HEADER_ZINDEX = new FixedZIndex(10);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const anchorRef = useRef(null);

  const onSelect = ({ item }: any) => setSelected(item);
  const [showComponent, setShowComponent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [showPopOverEducational, setShowPopOverEducational] = useState(false);
  return (
    <Fragment>
      <Button
        dataTestId="show-modal"
        text="Show modal"
        onClick={() => setShowComponent(true)}
      />
      <Button
        dataTestId="show-overlay"
        text="Show overlay"
        onClick={() => setShowOverlay(true)}
      />
      <Button
        dataTestId="show-popover"
        text="Show popover"
        onClick={() => setShowPopOver(true)}
      />
      <Button
        dataTestId="show-popover-educational"
        text="Show popover educational"
        onClick={() => setShowPopOverEducational(true)}
      />
      <Box
        padding={2}
        display="flex"
        justifyContent="center"
        margin={2}
        width="100%"
      >
        <Button
          ref={anchorRef}
          accessibilityControls="demo-dropdown-example"
          accessibilityExpanded={open}
          accessibilityHaspopup
          iconEnd="arrow-down"
          onClick={() => setOpen((prevVal) => !prevVal)}
          selected={open}
          size="lg"
          text="Menu"
        />
      </Box>
      {open && (
        <Dropdown
          anchor={anchorRef.current}
          id="demo-dropdown-example"
          onDismiss={() => setOpen(false)}
          zIndex={new CompositeZIndex([PAGE_HEADER_ZINDEX])}
        >
          <Dropdown.Item
            onSelect={onSelect}
            option={{ value: "Download image", label: "Download image" }}
            selected={selected}
          />
          <Dropdown.Item
            badge={{ text: "New" }}
            onSelect={onSelect}
            option={{ value: "Hide Pin", label: "Hide Pin" }}
            selected={selected}
          />
          <Dropdown.Link
            href="https://pinterest.com"
            isExternal
            onClick={({ event }) => event.preventDefault()}
            option={{ value: "Report Pin", label: "Report Pin" }}
          />
          <Dropdown.Item
            onSelect={onSelect}
            option={{ value: "Delete Pin", label: "Delete Pin" }}
            selected={selected}
          />
        </Dropdown>
      )}
      <Icon dataTestId="icon" accessibilityLabel="icon" icon="person-add" />
      <IconButtonFloating
        //dataTestId="icon-button-floating"
        ref={anchorRef}
        accessibilityControls="sections-dropdown-example"
        accessibilityExpanded={open}
        accessibilityLabel="Create Pin Menu"
        accessibilityPopupRole="menu"
        icon="add"
        onClick={() => setOpen((prevVal) => !prevVal)}
        selected={open}
        tooltip={{
          text: "Create Pin Menu",
        }}
      />
      <Label /*dataTestId="label"*/ htmlFor="email">Email</Label>
      <List label="label test" type="bare">
        <List.Item /*dataTestId="list-item-1"*/ text="List item text">
          <List.Item /*dataTestId="list-item-2"*/ text="List item text" />
        </List.Item>
      </List>
      {showComponent && (
        <Modal
          accessibilityModalLabel="Test modal"
          //dataTestId={"modal"}
          footer={
            <Flex gap={2} justifyContent="end">
              <Button
                dataTestId="modal-cancel"
                onClick={() => setShowComponent(false)}
                color="gray"
                text="Cancel"
              />
              <Button dataTestId="modal-next" color="red" text="Next" />
            </Flex>
          }
          heading={
            <Flex justifyContent="between">
              <Heading accessibilityLevel={1} size="500">
                Pick claim option
              </Heading>
              <IconButton
                dataTestId="close-modal"
                accessibilityLabel="Dismiss modal"
                bgColor="white"
                icon="cancel"
                iconColor="darkGray"
                onClick={() => setShowComponent(false)}
                size="sm"
              />
            </Flex>
          }
          onDismiss={() => setShowComponent(false)}
          size="sm"
          subHeading="Subheading"
        >
          Modal content
        </Modal>
      )}
      {showOverlay && (
        <OverlayPanel
          accessibilityDismissButtonLabel="Dismiss"
          accessibilityLabel="OverlayPanel"
          closeOnOutsideClick
          //dataTestId="overlay-panel"
          footer={<footer />}
          heading="OverlayPanel title"
          onDismiss={() => {
            setShowOverlay(false);
          }}
          size="sm"
          subHeading={<nav />}
        >
          Text
        </OverlayPanel>
      )}
      {showPopOver && (
        <Popover
          accessibilityLabel="text"
          anchor={anchorRef.current}
          //dataTestId="popover"
          onDismiss={() => setShowPopOver(false)}
        >
          <Text>Custom children</Text>
        </Popover>
      )}
      {showPopOverEducational && (
        <PopoverEducational
          accessibilityLabel="test"
          anchor={anchorRef.current}
          //dataTestId="popover-educational"
          message="text"
          onDismiss={() => setShowPopOverEducational(false)}
          primaryAction={{ text: "next", role: "button", onClick: () => {} }}
          size="sm"
        />
      )}
      <RadioGroup
        //dataTestId="radio-group-test-id"
        direction="row"
        id="radioGroup"
        legend="Options"
      >
        <RadioGroup.RadioButton
          //dataTestId="radio-button-test-id"
          id="choice-1"
          name="choice"
          onChange={() => {}}
          value="choice-1"
          label="Choice 1"
        />
        <RadioGroup.RadioButton
          //dataTestId="radio-button-test-id"
          id="choice-1"
          name="choice"
          onChange={() => {}}
          value="choice-2"
          label="Choice 2"
        />
      </RadioGroup>
    </Fragment>
  );
};

export default Randoms;
