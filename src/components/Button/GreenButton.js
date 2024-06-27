import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GreenButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-contained": {
    backgroundColor: theme.palette.green.secondary,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.green.dark,
    },
  },
  "&.MuiButton-outlined": {
    borderColor: theme.palette.green.main,
    color: theme.palette.green.main,
    "&:hover": {
      backgroundColor: "rgba(0, 128, 0, 0.1)", // light green with 10% opacity
    },
  },
}));

export default GreenButton;
