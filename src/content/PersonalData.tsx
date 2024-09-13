import {
  Accordion,
  Box,
  Button,
  Checkbox,
  ComboBox,
  Fieldset,
  Image,
  OverlayPanel,
  RadioButton,
  RadioGroup,
  Text,
  TextField,
} from "gestalt";
import { DatePicker } from "gestalt-datepicker";
import { ReactNode, useRef, useState } from "react";
import SearchPokemon from "./SearchPokemon";

interface colorData {
  label: string;
  subtext?: string | null;
  value: string;
}

const PersonalData = () => {
  const ref = useRef(null);
  const [pName, setPersonalName] = useState("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [color, setColor] = useState<colorData | null>(null);
  const [checked, setChecked] = useState(false);
  const [checkBoxError, setCheckBoxError]: [ReactNode | undefined, any] =
    useState(undefined);
  const validateCheckboxError = (checked: boolean) => {
    setChecked(checked);
    setCheckBoxError(
      checked && !!!pName ? (
        <Text dataTestId="form-error">Please enter a name</Text>
      ) : undefined,
    );
  };

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Accordion.Expandable
      // dataTestId="personal-data-accordion"
      borderStyle="shadow"
      id="personal-data"
      items={[
        {
          children: (
            <Box justifyContent="start" display="flex">
              <Box display="inlineBlock" padding={2}>
                <Button
                  dataTestId="show-overlay"
                  text="Show overlay"
                  onClick={() => setShowOverlay(true)}
                />
                {showOverlay && (
                  <OverlayPanel
                    accessibilityDismissButtonLabel="Dismiss"
                    accessibilityLabel="OverlayPanel"
                    closeOnOutsideClick
                    // dataTestId="overlay-panel"
                    footer={<footer />}
                    heading="OverlayPanel title"
                    onDismiss={() => {
                      setShowOverlay(false);
                    }}
                    size="sm"
                    subHeading={<nav />}
                  >
                    <Text>Text</Text>
                  </OverlayPanel>
                )}
                <Box marginBottom={5}>
                  <SearchPokemon />
                  <Box height={70}></Box>
                </Box>
                <Fieldset
                  dataTestId="test-fieldset"
                  errorMessage="At least 1 item must be selected"
                  id="fieldset-with-error"
                  legend="What is your favorite dog?"
                >
                  <Checkbox
                    dataTestId="schnauzer"
                    id="Schnauzer"
                    label="Schnauzer"
                    onChange={() => {}}
                  />
                  <Checkbox
                    dataTestId="aussie"
                    id="Aussie"
                    label="Aussie"
                    onChange={() => {}}
                  />
                </Fieldset>
                <TextField
                  dataTestId="name"
                  ref={ref}
                  id="name"
                  onChange={({ value }: any) => {
                    setPersonalName(value);
                  }}
                  placeholder="Enter name"
                  helperText="Enter your name"
                  label="Name"
                  value={pName}
                />
                <DatePicker
                  // dataTestId="birthday"
                  ref={ref}
                  placeholder="Enter birthday"
                  value={birthday}
                  onChange={({ value }: any) => setBirthday(value)}
                  helperText="Enter your date of birth"
                  label="Birthday"
                  id="birthday"
                />
                <ComboBox
                  dataTestId="favorite-color"
                  placeholder="Enter favorite color"
                  id="favorite-color"
                  label="Favorite color"
                  options={[
                    { label: "red", subtext: "red color", value: "red" },
                    { label: "blue", subtext: "", value: "blue" },
                  ]}
                  helperText="Choose favorite color"
                  onSelect={(e) => {
                    setColor(e.item);
                  }}
                  inputValue={color?.value}
                />
                <Checkbox
                  dataTestId="checkbox"
                  checked={checked}
                  helperText="Nothing will happen if you disagree, but please set your name"
                  id="checkbox"
                  label="I agree that this is a checkbox"
                  onChange={({ checked }: any) =>
                    validateCheckboxError(checked)
                  }
                  errorMessage={checkBoxError}
                  image={
                    <Box height={30} width={30}>
                      <Image
                        alt="Test image for checkbox"
                        dataTestId="checkbox-image"
                        fit="contain"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="https://avatars.githubusercontent.com/u/81310591?v=4"
                      />
                    </Box>
                  }
                />
                <RadioGroup
                  dataTestId="test-radio-group"
                  errorMessage="please pick one"
                  id="testingErrorEx"
                  legend="testing"
                >
                  <RadioGroup.RadioButton
                    dataTestId="test-radio-button-0"
                    id="choice-1"
                    name="choice"
                    onChange={() => {}}
                    value="choice-1"
                    label="Choice 1"
                    helperText="Helper"
                    badge={{
                      text: "test badge",
                      type: "error",
                    }}
                  />
                  <RadioGroup.RadioButton
                    dataTestId="test-radio-button-1"
                    id="choice-1"
                    name="choice"
                    onChange={() => {}}
                    value="choice-2"
                    label="Choice 2"
                  />
                </RadioGroup>
                <RadioButton
                  dataTestId="test-radiobutton"
                  disabled
                  id="id"
                  label="Outside of group"
                  onChange={() => {}}
                  size="sm"
                  value=""
                />
              </Box>
            </Box>
          ),
          summary:
            pName && birthday && color
              ? [
                  "Name: " + pName,
                  "Age: " + (new Date().getFullYear() - birthday.getFullYear()),
                  "Color: " + color.value,
                ]
              : ["Fill personal data"],
          title: "Personal data",
        },
      ]}
    />
  );
};

export default PersonalData;
