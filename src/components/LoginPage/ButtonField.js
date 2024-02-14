import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ButtonField = () => {
  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        borderRadius: "16px",
        margin: "10px 0px",
        bgcolor: green,
        "&:hover": {
          backgroundColor: "lightseagreen",
        },
      }}>
      Giriş Yap
    </Button>
  );
};

export default ButtonField;
