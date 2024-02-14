import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material/styles";
const InputField = ({ label, icon, type }) => {
  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <TextField
      label={label}
      variant="outlined"
      color="green"
      type={type}
      sx={{
        width: "100%",
        "& fieldset": {
          borderColor: green,
        },
      }}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon === "PersonIcon" ? <PersonIcon /> : <LockIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
