import { createTheme } from "@mui/material/styles";

export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

const themeSettings = (mode: "dark" | "light") => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main:
          mode === "dark" ? colorTokens.primary[500] : colorTokens.primary[500],
        light:
          mode === "dark" ? colorTokens.primary[800] : colorTokens.primary[50],
      },
      text: {
        primary: mode === "dark" ? colorTokens.grey[0] : colorTokens.grey[1000],
        secondary:
          mode === "dark" ? colorTokens.grey[200] : colorTokens.grey[800],
      },
      background: {
        default: mode === "dark" ? colorTokens.grey[900] : colorTokens.grey[0],
        paper: mode === "dark" ? colorTokens.grey[800] : colorTokens.grey[10],
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  });
};

export default themeSettings;
