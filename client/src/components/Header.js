import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }} style={{ paddingBottom: "50px" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark={darkMode}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              ICE Full Stack Assessment
            </Typography>
            {darkMode ? (
              <ToggleOffIcon
                fontSize="large"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <ToggleOnIcon
                fontSize="large"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
