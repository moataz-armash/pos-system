import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ButtonField = () => {
  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "1.4rem",
        width: "100%",
        borderRadius: "1.6rem",
        margin: "0.5rem 0",
        padding: "1rem",
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
