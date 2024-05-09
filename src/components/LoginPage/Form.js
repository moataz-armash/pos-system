import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Typography } from "@mui/material";
import ButtonField from "./ButtonField";
import VirtualKeyboard from "./virtual-keyboard/VirtaulKeyboard";
import { useForm } from "react-hook-form";
import FormContext from "../../hooks/Context/FormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formValues = { register, errors };
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      // Fetching all users from the API
      const response = await axios.get(
        "https://65f23ca7034bdbecc7647fef.mockapi.io/projects/1/projects"
      );
      const users = response.data;

      // Assuming users is an array of user objects with 'email' and 'password' properties
      let isValidUser = false;
      for (let user of users) {
        if (user.email === data.email && user.password === data.password) {
          isValidUser = true;
          break;
        }
      }

      // Redirect or show an error based on credentials check
      if (isValidUser) {
        navigate("/dashboard");
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      setLoginError("Failed to login");
    }
  };
  return (
    <Grid item container direction="column" spacing={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item>
          <FormContext.Provider value={formValues}>
            <VirtualKeyboard />
          </FormContext.Provider>
        </Grid>
        <Grid item>
          <ButtonField />
          {loginError && <Typography color="error">{loginError}</Typography>}
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
