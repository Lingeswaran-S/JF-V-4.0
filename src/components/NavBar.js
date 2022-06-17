import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import Container from "@mui/material/Container";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { ThemeValue } from "../App";
const pages = [
  { pageName: "Home", pathName: "/" },
  { pageName: "Events", pathName: "/eread" },

  { pageName: "About Us !", pathName: "/" },
];
const pages2 = [{ pageName: "Home", pathName: "/" }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  function reloadPage() {
    window.location.reload();
  }
  let setTheme = React.useContext(ThemeValue);
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
              {pages.map((page, ind) => (
                <Link
                  to={page.pathName}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem key={ind} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.pageName}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <TwoWheelerOutlinedIcon />
          <Typography
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
          </Typography>

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

            {/* <Tooltip title="Refresh Page"> */}
            {/* <Button onClick={reloadPage}> */}
            {/* <ReplayIcon /> */}
            {/* </Button> */}
            {/* </Tooltip> */}
            {/* <Tooltip title="Toggle Theme"> */}
            {/* <IconButton onClick={setTheme} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}

            {/* <Button onClick={setTheme}>Change Theme</Button> */}
            {/* <Button> */}
            {/* <LightModeTwoToneIcon onClick={setTheme} /> */}
            {/* </Button> */}
            {/* </Tooltip> */}

            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
