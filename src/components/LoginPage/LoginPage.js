import Grid from "@mui/material/Grid";
import posPhoto from "../../assets/pos.jpg";
import logo from "../../assets/logo.png";
import Image from "../LoginPage/Image";
import Form from "../LoginPage/Form";
const LoginPage = () => {
  return (
    <Grid container py="4px" my={16}>
      <Grid item lg={3} md={3}></Grid>
      <Grid item lg={3} md={3}>
        <Image
          image={posPhoto}
          alt="posPhoto"
          height="400px"
          borderRadius="8px"
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "80%" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%", maxWidth: "80%" }}>
          <Grid item>
            <Image image={logo} alt="logo" height="60px" />
          </Grid>
          <Form />
        </Grid>
      </Grid>
      <Grid item lg={3} md={3}></Grid>
    </Grid>
  );
};

export default LoginPage;
