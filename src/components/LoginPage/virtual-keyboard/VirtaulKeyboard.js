import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Keyboard from "react-simple-keyboard";
import InputField from "../InputField";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import { Box } from "@mui/system";
import Select from "@mui/material/Select";
import keyboardLayouts from "./keyboardLayouts.js";
import { useTranslation } from "react-i18next";

import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const green = theme.palette.green.main;

  const [inputUserName, setInputUserName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [layout, setLayout] = useState("default");
  const [language, setLanguage] = useState("english");
  const keyboardUserName = useRef();
  const keyboardPass = useRef();
  const [showKeyboard1, setShowKeyboard1] = useState(false);
  const [showKeyboard2, setShowKeyboard2] = useState(false);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setLayout("default"); // Reset to default layout on language change
  };

  const onChange = (input, inputName) => {
    if (inputName === "inputUserName") {
      setInputUserName(input);
    } else if (inputName === "inputPass") {
      setInputPass(input);
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInputUserName = (event) => {
    const input = event.target.value;
    setInputUserName(input);
    keyboardUserName.current.setInput(input);
  };

  const onChangeInputPass = (event) => {
    const input = event.target.value;
    setInputPass(input);
    keyboardPass.current.setInput(input);
  };

  const onInputFocus1 = () => {
    setShowKeyboard1(true);
    setShowKeyboard2(false); // Hide the other keyboard
  };

  const onInputFocus2 = () => {
    setShowKeyboard2(true);
    setShowKeyboard1(false); // Hide the other keyboard
  };

  const onButtonClick = () => {
    setShowKeyboard1(false);
    setShowKeyboard2(false);
  };

  return (
    <>
      <InputField
        type="text"
        label={t("userName")}
        icon="PersonIcon"
        placeholder={t("enterUserName")}
        input={inputUserName}
        onChangeInput={onChangeInputUserName}
        onFocus={onInputFocus1}
      />

      <InputField
        label={t("pass")}
        type="password"
        icon="LockIcon"
        placeholder={t("enterPass")}
        input={inputPass}
        onChangeInput={onChangeInputPass}
        onFocus={onInputFocus2}
      />

      {showKeyboard1 && (
        <Keyboard
          keyboardRef={(r) => (keyboardUserName.current = r)}
          layoutName={layout}
          onChange={(input) => onChange(input, "inputUserName")}
          onKeyPress={onKeyPress}
          layout={keyboardLayouts[language]}
        />
      )}
      {showKeyboard2 && (
        <Keyboard
          keyboardRef={(r) => (keyboardPass.current = r)}
          layoutName={layout}
          onChange={(input) => onChange(input, "inputPass")}
          onKeyPress={onKeyPress}
          layout={keyboardLayouts[language]}
        />
      )}
      <Box mt={1}>
        <FormControl fullWidth>
          <InputLabel id="language-select-label" color="green">
            {t("language")}
          </InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            label="Language"
            color="green"
            sx={{
              width: "100%",
              "& fieldset": {
                borderColor: green,
              },
            }}
            onChange={handleChangeLanguage}>
            <MenuItem value="english">{t("english")}</MenuItem>
            <MenuItem value="turkish">{t("turkish")}</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={onButtonClick}
          variant="outlined"
          color="error"
          sx={{ width: "100%", marginTop: "16px", marginBottom: "12px" }}>
          {t("hideKeyboard")}
        </Button>
      </Box>
    </>
  );
};

export default VirtualKeyboard;
