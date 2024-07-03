import { useState, useMemo, useEffect } from "react";
import { createAppTheme } from "../../muiTheme";

export const useThemeMode = () => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return { theme, mode, toggleColorMode };
};
