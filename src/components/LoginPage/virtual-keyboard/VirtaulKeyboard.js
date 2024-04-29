import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Keyboard from "react-simple-keyboard";
import InputField from "../InputField";
import { Button } from "@mui/material";
import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboard = ({ icon, ...props }) => {
  const theme = useTheme();
  const green = theme.palette.green.main;
  const [inputUserName, setInputUserName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [layout, setLayout] = useState("default");
  const keyboardUserName = useRef();
  const keyboardPass = useRef();
  const [showKeyboard1, setShowKeyboard1] = useState(false);
  const [showKeyboard2, setShowKeyboard2] = useState(false);

  const onChange = (input, inputName) => {
    if (inputName === "inputUserName") {
      setInputUserName(input);
    } else if (inputName === "inputPass") {
      setInputPass(input);
    }
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
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
        label="Kullanıcı Adı"
        icon="PersonIcon"
        placeholder={"Kullanıcı Adı Giriniz"}
        input={inputUserName}
        onChangeInput={onChangeInputUserName}
        onFocus={onInputFocus1}
      />
      <InputField
        label="Şifre"
        type="password"
        icon="LockIcon"
        placeholder={"Şifre Giriniz"}
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
        />
      )}
      {showKeyboard2 && (
        <Keyboard
          keyboardRef={(r) => (keyboardPass.current = r)}
          layoutName={layout}
          onChange={(input) => onChange(input, "inputPass")}
          onKeyPress={onKeyPress}
        />
      )}
      <Button onClick={onButtonClick} variant="contained" color="primary">
        Hide Keyboard
      </Button>
      {/* <Button onClick={onButtonClick}>Hide Keyboard</Button> */}
    </>
  );
};

export default VirtualKeyboard;

// <Button onClick={onButtonClick}>Hide Keyboard</Button>
