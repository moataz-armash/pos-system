import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Example primary color
    },
    secondary: {
      main: "#ff4081", // Example secondary color
    },
    // Add your custom color here
    green: {
      main: "#029199", // Replace 'yourCustomColor' with your desired color code
      secondary: "#02747a",
    },
    lightGreen: {
      main: "#02747a",
      secondary: "#01575c",
    },
    lightBlue: {
      main: "#67bdc2",
    },
  },
});
