import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import ReplayIcon from "@mui/icons-material/Replay";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ThemeValue, UserContext } from "../App";

const pages = [
  { pageName: "Home", pathName: "/", isPath: "true" },
  { pageName: "Jobs", pathName: "/jobs", isPath: "true" },

  // { pageName: "About Us !", pathName: "/", isPath: "true" },
  { pageName: "Logout", pathName: "/", isPath: "false", method: "logout" },
];
const pages2 = [{ pageName: "Home", pathName: "/" }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  function reloadPage() {
    window.location.reload();
  }
  let setTheme = React.useContext(ThemeValue);
  let currentUser = React.useContext(UserContext);
  console.log(currentUser);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const history = useHistory();
  const location = useLocation();
  
  function logoutGoogleUser() {
    const currentURL = location.pathname;
    currentUser.setGoogleUser({});
    if (currentURL.includes("/uploadJob")) {
      history.push("/");
    }
    
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "black",
        mt: 0.1,
        mb: 0.3,

        borderRadius: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              // "linear-gradient(90deg, rgba(51, 156, 255,0.9), rgba(89, 96, 255,0.8) 43%, rgba(215, 19, 230,0.5))"
            >
              {pages.map((page, ind) =>
                page.isPath === "true" ? (
                  <Link
                    to={page.pathName}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem key={ind} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        {page.pageName}
                      </Typography>
                    </MenuItem>
                  </Link>
                ) : (
                  <MenuItem key={ind} onClick={logoutGoogleUser}>
                    <Typography textAlign="center">{page.pageName}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <TwoWheelerOutlinedIcon /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            style={{ textDecoration: "none" }}
            sx={{
              ml: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "fantasy",
              fontWeight: 600,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Job-Ride
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages2.map((page, ind) => (
              <Link to={page.pathName} style={{ textDecoration: "none" }}>
                <Button
                  key={ind}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.pageName}
                </Button>
              </Link>
            ))}
          </Box>

          {Object.keys(currentUser.user).length != 0 ? (
            <ButtonGroup
              disableElevation
              size="small"
              variant="text"
              sx={{ marginRight: "3px", marginLeft: "3px" }}
            >
              <Button sx={{ color: "white" }}>{currentUser.user.name}</Button>
              <Button onClick={logoutGoogleUser}>Logout</Button>
            </ButtonGroup>
          ) : (
            <span id="signIn" class="mr-3"></span>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <ButtonGroup disableElevation size="small" variant="outlined">
              <Tooltip title="Refresh Page">
                <Button onClick={reloadPage}>
                  <ReplayIcon />
                </Button>
              </Tooltip>

              <Tooltip title="Change Theme">
                <Button>
                  <LightModeTwoToneIcon onClick={setTheme} />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
