// src/components/Icon/Icon.js
import React from "react";
import {
  ShoppingCartIcon,
  AttachMoneyIcon,
  AssignmentReturnIcon,
  ReceiptIcon,
  AssessmentIcon,
  SettingsIcon,
  InputIcon,
  LanguageIcon,
  PrinterIcon,
} from "./icons";
// import other icons as needed

const Icon = ({ name, ...props }) => {
  switch (name) {
    case "shoppingCart":
      return <ShoppingCartIcon {...props} />;
    case "attachMoney":
      return <AttachMoneyIcon {...props} />;
    case "assignmentReturn":
      return <AssignmentReturnIcon {...props} />;
    case "receipt":
      return <ReceiptIcon {...props} />;
    case "assessment":
      return <AssessmentIcon {...props} />;
    case "settings":
      return <SettingsIcon {...props} />;
    case "input":
      return <InputIcon {...props} />;
    case "language":
      return <LanguageIcon {...props} />;
    case "printer":
      return <PrinterIcon {...props} />;
    // add other cases for different icons
    default:
      return null; // or a default icon
  }
};

export default Icon;
