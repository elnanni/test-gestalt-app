import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Checkbox,
  ComboBox,
  Pog,
  Tabs,
  Text,
  TextField,
} from "gestalt";
import { useRef, useState } from "react";
import { DatePicker } from "gestalt-datepicker";
import Images from "./Images";
import Banners from "./Banners";
import Randoms from "./Randoms";

interface colorData {
  label: string;
  subtext?: string | null;
  value: string;
}

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const [pName, setPersonalName] = useState("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [color, setColor] = useState<colorData | null>(null);
  const [avatar, setAvatar] = useState("");
  const [avatarError, setAvatarError] = useState("");
  //https://avatars.githubusercontent.com/u/81310591?v=4
  const validImgUrl = (url: string): boolean => {
    const valid = /^http[^?]*.(jpg|jpeg|gif|png|tiff|bmp|svg|v=4)(\?(.*))?$/gim;
    if (url.match(valid) != null) setAvatarError("");
    else setAvatarError("Enter a valid image url");
    !!!url && setAvatarError("");
    return url.match(valid) != null;
  };
  return (
    <Box
      justifyContent="center"
      color="lightWash"
      margin={1}
      padding={4}
      minHeight="65vh"
    >
      <Box display="inlineBlock">
        <Box padding={2}>
          <Box display="flex">
            <TextField
              dataTestId="avatar-url"
              type="url"
              id="avatar-input"
              helperText="Enter url for an avatar"
              label="Avatar URL"
              onChange={({ value }) => {
                setAvatar(value);
              }}
              onBlur={({ value }) => validImgUrl(value)}
              placeholder="Enter avatar url"
              value={avatar}
              errorMessage={avatarError}
            />
            {!!!avatarError && avatar && (
              <Box marginStart={2} marginTop={5}>
                <Avatar size="sm" src={avatar} name="avatarImg" />
              </Box>
            )}
          </Box>
        </Box>
        <Tabs
          //dataTestId="options-tabs"
          bgColor="transparent"
          activeTabIndex={activeIndex}
          onChange={({ activeTabIndex, event }) => {
            event.preventDefault();
            setActiveIndex(activeTabIndex);
          }}
          tabs={[
            { href: "#", text: "Personal data" },
            { href: "#", text: "Images" },
            { href: "#", text: <Box>Banners <Badge dataTestId="badge-new" text="New" type="recommendation" tooltip={{text: 'New'}} /></Box>, },
            { href: "#", text: "Randoms" },
          ]}
        />
      </Box>
      <Box color="light">
        {activeIndex === 0 && (
          <Accordion.Expandable
            //dataTestId="personal-data-accordion"
            borderStyle="shadow"
            id="personal-data"
            items={[
              {
                children: (
                  <Box justifyContent="start" display="flex">
                    <Box display="inlineBlock" padding={2}>
                      <TextField
                        dataTestId="name"
                        ref={ref}
                        id="name"
                        onChange={({ value }) => {
                          setPersonalName(value);
                        }}
                        placeholder="Enter name"
                        helperText="Enter your name"
                        label="Name"
                        value={pName}
                      />
                      <DatePicker
                        //dataTestId="birthday"
                        ref={ref}
                        placeholder="Enter birthday"
                        value={birthday}
                        onChange={({ value }) => setBirthday(value)}
                        helperText="Enter your date of birth"
                        label="Birthday"
                        id="birthday"
                      />
                      <ComboBox
                        //dataTestId="favorite-color"
                        placeholder="Enter favorite color"
                        id="favorite-color"
                        label="Favorite color"
                        options={[
                          { label: "red", subtext: "", value: "red" },
                          { label: "blue", subtext: "", value: "blue" },
                        ]}
                        helperText="Choose favorite color"
                        onSelect={(e) => {
                          setColor(e.item);
                        }}
                        inputValue={color?.value}
                      />
                      <Checkbox
                        //dataTestId="employee"
                        id="id"
                        label="Name"
                        onChange={() => {}}
                        size="sm"
                      />
                    </Box>
                  </Box>
                ),
                summary:
                  pName && birthday && color
                    ? [
                        "Name: " + pName,
                        "Age: " +
                          (new Date().getFullYear() - birthday.getFullYear()),
                        "Color: " + color.value,
                      ]
                    : ["Fill personal data"],
                title: "Personal data",
              },
            ]}
          />
        )}
        {activeIndex === 1 && <Images />}
        {activeIndex === 2 && <Banners />}
        {activeIndex === 3 && <Randoms />}
      </Box>
      <Box margin={2} justifyContent="end" alignContent="end" display="flex">
        <Pog /*dataTestId="pog-heart"*/ icon="heart" />
      </Box>
    </Box>
  );
};

export default Content;
