import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
const ButtonField = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const api = "https://65f23ca7034bdbecc7647fef.mockapi.io/projects/1/projects";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(api);
        console.log(response.data);
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const theme = useTheme();
  const green = theme.palette.green.main;
  return (
    <>
      <Button
        type="submit"
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
        {t("login")}
      </Button>
      {/* {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.email}</li>
            <li>{user.password}</li>
          </ul>
        );
      })} */}
    </>
  );
};

export default ButtonField;
