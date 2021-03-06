import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentThemeValue, Fun, ThemeValue } from "../App";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Home() {
  let sty = {
    textDecoration: "none",
    wordWrap: "break-word",
  };
  console.log("Home-P");
  let f = useContext(Fun);
  let themeV = useContext(CurrentThemeValue);
  function reloadPage() {
    window.location.reload();
  }

  console.log("inside home");
  useEffect(() => {
    console.log("again");
    f();
    console.log("Home-UseEffect");
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: themeV ? "#1A2027" : "#fff",
    // theme.palette.mode === "dark" ? "#1A2027" : "#fff"
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: 3,
    textAlign: "center",
    color: "theme.palette.text.secondary",

    // backgroundImage:
    //   "linear-gradient(90deg, rgb(51, 156, 255), rgb(89, 96, 255) 43%, rgb(215, 19, 230))",
  }));
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={5}>
          <Link to="/jobs" style={sty}>
            <Item
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(51, 156, 255,0.9), rgba(89, 96, 255,0.8) 43%, rgba(215, 19, 230,0.5))",
              }}
            >
              <strong class={themeV ? "text-white" : "text-dark"}> Jobs</strong>
            </Item>
          </Link>

          <Link to="/eread" style={sty}>
            <Item
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(51, 156, 255,0.9), rgba(89, 96, 255,0.8) 43%, rgba(215, 19, 230,0.5))",
              }}
            >
              <strong class={themeV ? "text-white" : "text-dark"}>
                Events
              </strong>
            </Item>
          </Link>

          {/* <Link to="/qas" style={sty}>
            <Item
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(51, 156, 255,0.9), rgba(89, 96, 255,0.8) 43%, rgba(215, 19, 230,0.5))",
              }}
            >
              <strong class={themeV ? "text-white" : "text-dark"}>
                Interview Q/A
              </strong>
            </Item>
          </Link> */}

          <Link to="/jobs" style={sty}>
            <Item>
              <strong class={themeV ? "text-white" : "text-dark"}>
                About us !
              </strong>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <Card>
              {/* sx={{ maxWidth: 345 }} */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Welocome
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Thank You For Choosing Job-Ride!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
