import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "./styles/Theme";

export default function App() {
  const mode = useSelector((state: any) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}
