import { Sidebar } from "./Sidebar/Sidebar";
import { Menu } from "./Sidebar/Menu";
import { MenuItem } from "./Sidebar/MenuItem";
import { Icon } from "../../components/Icon";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CahserInfo from "./Cashier/CashierInfo";
import CashierStatus from "./Cashier/CashierStatus";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import CashierSystem from "./Cashier/CashierSystem";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

function Dashboard({ dashboard }) {
  const theme = useTheme();
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Use useHistory hook

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    // Perform any necessary cleanup actions here (e.g., clearing tokens)
    navigate("/");
  };
  return (
    <>
      <Hidden mdDown onClick={toggleDrawer(true)}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[1],
            // overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            flex: "1 0 auto",
            zIndex: theme.zIndex.drawer,
            position: "fixed",
            top: 0,
            outline: 0,
            left: 0,
            borderRight: `1px solid ${theme.palette.divider}`,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            width: "270px",
            boxSizing: "border-box",
          }}>
          <Sidebar>
            <Menu subHeading={t("Home")}>
              <MenuItem link="/dashboard" icon={<Icon name="shoppingCart" />}>
                {t("sales")}
              </MenuItem>
              <MenuItem link="/price-page" icon={<Icon name="attachMoney" />}>
                {t("seePrice")}
              </MenuItem>
              <MenuItem link="/return" icon={<Icon name="assignmentReturn" />}>
                {t("returnProcess")}
              </MenuItem>
            </Menu>
            <Menu subHeading={t("applications")}>
              <MenuItem link="/collections" icon={<Icon name="receipt" />}>
                {t("collections")}
              </MenuItem>
              <MenuItem link="/reports" icon={<Icon name="assessment" />}>
                {t("reports")}
              </MenuItem>
            </Menu>
            <Menu subHeading={t("other")}>
              <MenuItem
                link="/other-operations"
                icon={<Icon name="settings" />}>
                {t("otherOperations")}
              </MenuItem>
              <MenuItem link="/direct-entry" icon={<Icon name="input" />}>
                {t("directProductEntry")}
              </MenuItem>
              <MenuItem
                link="/translation-page"
                icon={<Icon name="language" />}>
                {t("www")}
              </MenuItem>
              <MenuItem link="/" onClick={handleLogout} icon={<LogoutIcon />}>
                {t("logout")}
              </MenuItem>
            </Menu>
          </Sidebar>
          <CahserInfo />
          <CashierStatus />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <AppBar position="sticky" color="green">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Sidebar>
            <Menu subHeading={t("home")}>
              <MenuItem link="/dashboard" icon={<Icon name="shoppingCart" />}>
                {t("sales")}
              </MenuItem>
              <MenuItem link="/price-page" icon={<Icon name="attachMoney" />}>
                {t("seePrice")}
              </MenuItem>
              <MenuItem link="/return" icon={<Icon name="assignmentReturn" />}>
                {t("returnProcess")}
              </MenuItem>
            </Menu>
            <Menu subHeading={t("applications")}>
              <MenuItem link="/collections" icon={<Icon name="receipt" />}>
                {t("collections")}
              </MenuItem>
              <MenuItem link="/reports" icon={<Icon name="assessment" />}>
                {t("reports")}
              </MenuItem>
            </Menu>
            <Menu subHeading={"other"}>
              <MenuItem
                link="/other-operations"
                icon={<Icon name="settings" />}>
                {t("otherOperations")}
              </MenuItem>
              <MenuItem link="/direct-entry" icon={<Icon name="input" />}>
                {t("directProductEntry")}
              </MenuItem>
              <MenuItem
                link="/translation-page"
                icon={<Icon name="language" />}>
                {t("www")}
              </MenuItem>
              <MenuItem link="/" onClick={handleLogout} icon={<LogoutIcon />}>
                {t("logout")}
              </MenuItem>
            </Menu>
          </Sidebar>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              boxShadow: theme.shadows[1],
            }}>
            <CahserInfo />
            <CashierStatus />
          </Box>
        </Drawer>
      </Hidden>
      {!dashboard ? <CashierSystem /> : ""}
    </>
  );
}

export default Dashboard;
