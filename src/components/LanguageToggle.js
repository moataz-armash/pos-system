import { React, useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "tr", label: "Turkish" },
  // Add more languages as needed
];

const LanguageToggle = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
    handleClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}>
      <Button
        variant="contained"
        color="green"
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          minWidth: "0",
          width: "56px",
          height: "56px",
          padding: 0,
          color: "white",
        }}>
        <LanguageIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}>
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageToggle;
