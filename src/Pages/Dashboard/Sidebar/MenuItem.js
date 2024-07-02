import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled, useTheme } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { SidebarContext } from "./Sidebar";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import { forwardRef, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const MenuItem = forwardRef(
  (
    {
      children,
      icon,
      link = "dashboard",
      badge = false,
      badgeColor = "secondary",
      badgeContent = "6",
      textFontSize = "14px",
      borderRadius = "8px",
      disabled = false,
      badgeType = "filled",
      target = "",
      selectedLink,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const handleClick = () => {
      setOpen(!open);
    };
    const customizer = useContext(SidebarContext);
    const theme = useTheme();
    const ListItemStyled = styled(ListItemButton)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: theme.direction === "ltr" ? "left" : "right",
      borderRadius: borderRadius,
      color: customizer.textColor,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? "0.6" : "1",
      ".MuiListItemIcon-root": {
        color: customizer.textColor,
      },
      "&:hover": {
        backgroundColor: disabled ? "#fff" : customizer.themeColor + 20,
        color: customizer.themeColor,
        ".MuiListItemIcon-root": {
          color: customizer.themeColor,
        },
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: customizer.themeColor,
        "&:hover": {
          backgroundColor: customizer.themeColor,
          color: "white",
        },
        ".MuiListItemIcon-root": {
          color: "#fff",
        },
      },
    }));

    const ListIConStyled = styled(ListItemIcon)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px 0px",
      cursor: "pointer",
      marginLeft: "-10px",
      color: open ? "inherit" : "#fff",
    }));

    return (
      <Box>
        <ListItemStyled
          onClick={handleClick}
          href={link}
          sx={{ display: "flex", gap: "15px" }}
          target={target}
          selected={link === currentPath}>
          <ListItemIcon
            sx={{
              minWidth: "0px",
            }}>
            {icon ? icon : <CircleOutlined />}
          </ListItemIcon>
          {!customizer.isCollapse ? (
            <>
              <ListItemText sx={{ my: 0 }}>
                <Typography
                  fontSize={textFontSize}
                  sx={{ lineHeight: "1" }}
                  variant="caption">
                  {children}
                </Typography>
              </ListItemText>

              {badge ? (
                <Chip
                  label={badgeContent}
                  color={badgeColor}
                  variant={badgeType}
                  size="small"
                />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </ListItemStyled>
      </Box>
    );
  }
);
