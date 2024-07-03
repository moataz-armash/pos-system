import React from "react";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import posPhoto from "../../assets/pos.jpg";
import logo from "../../assets/logo.png";
import Image from "../../components/LoginPage/Image.js";
import Form from "../../components/LoginPage/Form.js";
import { theme } from "../../muiTheme.js";
import { ThemeProvider } from "@mui/material/styles";

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container py="0.4rem" my={8}>
        <Grid item lg={3} md={3}></Grid>

        <Grid
          container
          lg={6}
          md={6}
          xs={12}
          direction="column"
          alignItems="center">
          {/* Info Alerts */}
          <Box width="100%" mb={2}>
            <Alert severity="info" sx={{ mb: 1 }}>
              Username for test: Odell.Schoen@yahoo.com
            </Alert>
            <Alert severity="info">Password: xL6NhsKlz4w42sv</Alert>
          </Box>

          {/* Main content */}
          <Grid container>
            {/* Image container */}
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              container
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

            {/* Form container */}
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "80%",
                flexDirection: "column",
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
          </Grid>
        </Grid>

        <Grid item lg={3} md={3}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
