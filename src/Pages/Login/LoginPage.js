import Grid from "@mui/material/Grid";
import posPhoto from "../../assets/pos.jpg";
import logo from "../../assets/logo.png";
import Image from "../../components/LoginPage/Image.js";
import Form from "../../components/LoginPage/Form.js";
import { theme } from "../../muiTheme.js";
import { ThemeProvider } from "@mui/material/styles";

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container py="0.4rem" my={16}>
        <Grid item lg={3} md={3}></Grid>

        {/* Container to center the image */}
        <Grid
          container
          lg={3}
          md={3}
          xs={12}
          alignItems="center"
          justifyContent="center"
          py={4}>
          <Grid item>
            <Image
              image={posPhoto}
              alt="posPhoto"
              height="400px"
              borderRadius="0.8rem"
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "80%",
            flexDirection: "column", // Stack items vertically on small screens
            textAlign: "center",
          }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              height: "100%",
              maxWidth: { xs: "50%", md: "80%" },
              margin: "auto",
            }}>
            <Grid item>
              <Image image={logo} alt="logo" height="60px" />
            </Grid>
            <Form />
          </Grid>
        </Grid>

        <Grid item lg={3} md={3}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
