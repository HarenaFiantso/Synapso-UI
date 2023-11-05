import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#78BCC4",
      light: "#B8E5EA",
      dark: "#13555C",
    },
    secondary: {
      main: "#002C3E",
      light: "#3C809A",
      dark: "#071A21",
    },
    error: {
      main: "#F7444E",
      light: "#FF999E",
      dark: "B20008",
    },
  },
  typography: {
    fontFamily: "Poppins"
  }
});
