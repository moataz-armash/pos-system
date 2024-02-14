import Grid from "@mui/material/Grid";
const Image = ({ image, alt, height, borderRadius }) => {
  return (
    <Grid item xs={3}>
      <img
        src={image}
        alt={alt}
        height={height}
        style={{ borderRadius: borderRadius ? borderRadius : "0px" }}
      />
    </Grid>
  );
};

export default Image;
