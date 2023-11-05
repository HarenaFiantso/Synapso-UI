import Navbar from "./components/Navbar";

import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}
