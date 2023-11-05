import { Typography, useTheme  } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FlexBetween from "../styles/FlexBetween";

export default function NavbarComponent() {
  const navigate = useNavigate();

  /* Theme configuration variables */
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;

  return (
    <FlexBetween>
      <FlexBetween>
        <Typography
          fontWeight={"bold"}
          fontSize={"clamp(1rem, 2rem, 2.25rem)"}
          color={"primary"}
          onClick={() => navigate("/home")}
          sx={{"&:hover": {
            color: primaryLight,
            cursor: "pointer"
          }}}
        >
          Synapso
        </Typography>
      </FlexBetween>
    </FlexBetween>
  );
}
