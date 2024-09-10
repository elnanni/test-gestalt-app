import { Avatar, Box, TextField } from "gestalt";
import { useState } from "react";

const PersonalAvatar = () => {
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
  );
};

export default PersonalAvatar;
