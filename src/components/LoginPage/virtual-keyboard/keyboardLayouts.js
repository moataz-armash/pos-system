const keyboardLayouts = {
  english: {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "z x c v b n m",
      "{shift} {space} {backspace}",
    ],
    shift: [
      "! @ # $ % ^ & * ( )",
      "Q W E R T Y U I O P",
      "A S D F G H J K L",
      "Z X C V B N M",
      "{shift} {space} {backspace}",
    ],
  },
  turkish: {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u ı o p ğ ü",
      "a s d f g h j k l ş i ,",
      "z x c v b n m ö ç .",
      "{shift} {space} {backspace}",
    ],
    shift: [
      "! \" # $ % & ' ( )",
      "Q W E R T Y U I O P Ğ Ü",
      "A S D F G H J K L Ş I ;",
      "Z X C V B N M Ö Ç :",
      "{shift} {space} {backspace}",
    ],
  },
};

export default keyboardLayouts;
