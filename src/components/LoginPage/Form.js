import Grid from "@mui/material/Grid";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
import VirtualKeyboard from "./virtual-keyboard/VirtaulKeyboard";
const Form = () => {
  return (
    <Grid item container direction="column" spacing={2}>
      {/* <Grid item>
        <InputField label="Kullanıcı Adı" icon="PersonIcon" />
      </Grid>
      <Grid item>
        <InputField label="Şifre" type="password" icon="LockIcon" />
      </Grid> */}
      <Grid item>
        <VirtualKeyboard />
      </Grid>
      <Grid item>
        <ButtonField />
      </Grid>
    </Grid>
  );
};

export default Form;
