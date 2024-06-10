import { TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import FormContext from "../../hooks/Context/FormContext";
const InputField = ({ icon, input, onChangeInput, placeholder, ...props }) => {
  const { register, errors } = useContext(FormContext);
  const registrationFunction = icon === "PersonIcon" ? "email" : "password";
  console.log(errors[registrationFunction]);
  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <TextField
      {...register(registrationFunction, {
        required: `${registrationFunction} is required`,
      })}
      error={!!errors[registrationFunction]}
      helperText={
        errors[registrationFunction] ? errors[registrationFunction].message : ""
      }
      value={input}
      placeholder={placeholder}
      onChange={onChangeInput}
      {...props}
      variant="outlined"
      color="green"
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
