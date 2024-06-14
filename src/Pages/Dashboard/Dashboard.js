import { Sidebar } from "./Sidebar";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Icon } from "../../components/Icon";
import Box from "@mui/material/Box";

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "none",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: 1200,
        position: "fixed",
        top: 0,
        outline: 0,
        left: 0,
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        transition: "width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        width: "270px",
        boxSizing: "border-box",
      }}>
      <Sidebar>
        <Menu subHeading="ANA SAYFA">
          <MenuItem link="/" badge={true} icon={<Icon name="shoppingCart" />}>
            SATIŞ
          </MenuItem>
          <MenuItem link="/price" icon={<Icon name="attachMoney" />}>
            FIYAT GÖR
          </MenuItem>
          <MenuItem link="/return" icon={<Icon name="assignmentReturn" />}>
            IADE İŞLEMİ
          </MenuItem>
        </Menu>
        <Menu subHeading="UYGULAMALAR">
          <MenuItem link="/collections" icon={<Icon name="receipt" />}>
            TAHSİLATLAR
          </MenuItem>
          <MenuItem link="/reports" icon={<Icon name="assessment" />}>
            RAPORLAR
          </MenuItem>
        </Menu>
        <Menu subHeading="DİĞER">
          <MenuItem link="/other-operations" icon={<Icon name="settings" />}>
            DIĞER İŞLEMLER
          </MenuItem>
          <MenuItem link="/direct-entry" icon={<Icon name="input" />}>
            DİREKT ÜRÜN GİRİŞİ
          </MenuItem>
          <MenuItem link="/www" icon={<Icon name="language" />}>
            WWW
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default Dashboard;
