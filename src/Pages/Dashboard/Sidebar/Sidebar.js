import * as React from "react";
import { Box } from "@mui/material";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { Profile } from "./UserProfile";

export const SidebarContext = React.createContext({
  width: "270px",
  collapsewidth: "80px",
  isCollapse: false,
});

export const Sidebar = React.forwardRef(
  (
    {
      children,
      width = "260px",
      collapsewidth = "80px",
      isCollapse = false,
      themeColor = "#029199",
      themeSecondaryColor = "#02747a",
      userName = "Mathew",
      designation = "Designer",
      showProfile = true,
      userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
    },
    ref
  ) => {
    const [isSidebarHover, setIsSidebarHover] = React.useState(false);
    const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;
    const parentTheme = useTheme();

    const sidebarTheme = React.useMemo(
      () =>
        createTheme({
          ...parentTheme,
          palette: {
            ...parentTheme.palette,
            primary: {
              main: themeColor,
            },
            secondary: {
              main: themeSecondaryColor,
              contrastText: "#fff",
            },
          },
        }),
      [parentTheme, themeColor, themeSecondaryColor]
    );

    return (
      <ThemeProvider theme={sidebarTheme}>
        <Box
          sx={{
            width: toggleWidth,
            flexShrink: 0,
            fontFamily: "inherit",
            color: sidebarTheme.palette.text.primary,
            backgroundColor: sidebarTheme.palette.background.paper,
          }}>
          <Box
            sx={{
              width: toggleWidth,
            }}>
            <SidebarContext.Provider
              value={{
                isCollapse,
                width,
                collapsewidth,
              }}>
              {children}
            </SidebarContext.Provider>

            {showProfile ? (
              <Profile
                userName={userName}
                designation={designation}
                userimg={userimg}
                isCollapse={isCollapse}
              />
            ) : null}
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
);
