import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { palette } from "@mui/system";
import Fab from "@mui/material/Fab";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import React from "react";
import { useLocation, Link } from "react-router-dom";
const m = [
  "I'll be in the neighbourhood this week. Let's grab a bite to eat",
  "I'll be in the neighbour",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
  "I'll be in the neighbourhood this week. Let's gra",
];
function SingleQA(ansList) {
  const location = useLocation();
  const { cQuestion } = location.state;
  const { listAns } = location.state;
  console.log(cQuestion);
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        square

        // style={{ position: "fixed", zIndex: "9999", top: "20%" }}
        // sx={{ pb: "5px" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          {cQuestion}
          <Link to="/qas" style={{ textDecoration: "none" }}>
            <Fab
              sx={{ ml: 3 }}
              color="secondary"
              size="small"
              variant="extended"
            >
              <KeyboardBackspaceIcon />
              Back
            </Fab>
          </Link>
        </Typography>
        <List sx={{ mb: 2 }}>
          <ListSubheader
            // position="sticky-bottom"
            sx={{ bgcolor: "background.paper" }}
          >
            All-Related answers
          </ListSubheader>

          {listAns.map((ans, ind) => {
            return (
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>{ind + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={ans} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </React.Fragment>
  );
}

export default SingleQA;
