import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { useMemo, useState } from "react";
import { themeSettings } from "./styles/Theme";

/* Routing system of the Application */
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

interface AppState {
  mode: "dark" | "light";
  /* We are gonna re-use this for the authentification with token system */
}

const initialAppState: AppState = {
  mode: "light",
   /* We are gonna re-use this for the authentification with token system */
};

export default function App() {
  const [appState] = useState<AppState>(initialAppState);
  const theme = useMemo(() => createTheme(themeSettings(appState.mode)), [appState.mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
