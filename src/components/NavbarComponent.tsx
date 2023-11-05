import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  Select,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Message,
  DarkMode,
  Close,
  Notifications,
  Help,
  LightMode
} from "@mui/icons-material";
import { useState } from "react";

import FlexBetween from "../styles/FlexBetween";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  /* Theme configuration variables */
  const theme = useTheme() as any;
  const neutralLight = theme.palette.neutral.light;
  const primaryLight = theme.palette.primary.light;
  const altBackgroundColor = theme.palette.background.alt;

  const fullName = "Fiantso Harena";
  const toggleMobileMenu = () => {
    setIsMobileMenuToggled(!isMobileMenuToggled);
  };

  return (
    <FlexBetween padding="1rem 6%" bgcolor={altBackgroundColor}>
      <FlexBetween>
        <Typography
          fontWeight={"bold"}
          fontSize={"clamp(.5rem, 1.5rem, 1.75rem)"}
          color={"primary"}
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Synapso
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            bgcolor={neutralLight}
            borderRadius="20px"
            gap="3rem"
            padding=".1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {isMobileMenuToggled ? (
        <MobileMenu fullName={fullName} toggleMobileMenu={toggleMobileMenu} />
      ) : (
        <DesktopMenu toggleMobileMenu={toggleMobileMenu} />
      )}
    </FlexBetween>
  );
}


interface MobileMenuProps {
  fullName: string;
  toggleMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ fullName, toggleMobileMenu }) => {
  return (
    <Box
      position="fixed"
      right="0"
      bottom="0"
      height="100%"
      zIndex="10"
      maxWidth="500px"
      minWidth="300px"
      bgcolor="background.default"
    >
      <Box display="flex" justifyContent="flex-end" p="1rem">
        <IconButton onClick={toggleMobileMenu}>
          <Close />
        </IconButton>
      </Box>

      <FlexBetween
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="3rem"
      >
        <IconButton sx={{ fontSize: "25px" }}>
          <DarkMode sx={{ fontSize: "25px" }} />
        </IconButton>
        <Message sx={{ fontSize: "25px" }} />
        <Notifications sx={{ fontSize: "25px" }} />
        <Help sx={{ fontSize: "25px" }} />
        <FormControl fullWidth variant="standard">
          <Select
            value={fullName}
            sx={{
              backgroundColor: "neutral.light",
              width: "150px",
              borderRadius: "0.25rem",
              p: "0.25rem 1rem",
              "& .MuiSvgIcon-root": {
                pr: "0.25rem",
                width: "3rem",
              },
              "& .MuiSelect-select:focus": {
                backgroundColor: "neutral.light",
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => toggleMobileMenu()}>Log Out</MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
    </Box>
  );
};

interface DesktopMenuProps {
  toggleMobileMenu: () => void;
}
const DesktopMenu: React.FC<DesktopMenuProps> = ({ toggleMobileMenu }) => {
  const theme = useTheme() as any;
  const isDarkMode = theme.palette.mode === 'dark';
  const dark = theme.palette.neutral.dark;

  return (
    <FlexBetween gap="2rem">
      <IconButton onClick={toggleMobileMenu}>
        {isDarkMode ? (
          <DarkMode sx={{ fontSize: '25px' }} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: '25px' }} />
        )}
      </IconButton>
      <Message sx={{ fontSize: '25px' }} />
      <Notifications sx={{ fontSize: '25px' }} />
      <Help sx={{ fontSize: '25px' }} />
      <FormControl variant="standard">
        <Select
          value="Your Name"
          sx={{
            backgroundColor: 'neutral.light',
            width: '150px',
            borderRadius: '0.25rem',
            p: '0.25rem 1rem',
            '& .MuiSvgIcon-root': {
              pr: '0.25rem',
              width: '3rem',
            },
            '& .MuiSelect-select:focus': {
              backgroundColor: 'neutral.light',
            },
          }}
        >
          <MenuItem value="Your Name">
            <Typography>Fiantso Harena</Typography>
          </MenuItem>
          <MenuItem>Log Out</MenuItem>
        </Select>
      </FormControl>
    </FlexBetween>
  );
};

