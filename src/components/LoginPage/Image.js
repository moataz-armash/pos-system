import Grid from "@mui/material/Grid";
const Image = ({ ...props }) => {
  return (
    <Grid item xs={3}>
      <img
        src={props.image}
        alt={props.alt}
        height={props.height}
        style={{
          borderRadius: props.borderRadius ? props.borderRadius : "0",
        }}
      />
    </Grid>
  );
};

export default Image;
