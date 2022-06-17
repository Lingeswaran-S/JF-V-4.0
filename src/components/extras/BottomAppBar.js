import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Popover, Popper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import Modal from "@mui/material/Modal";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";

import { QAs } from "../qa/QA";
import { Link } from "react-router-dom";

export default function BottomAppBar() {
  const messages = React.useContext(QAs);

  return (
    <React.Fragment>
      <CssBaseline />

      <Paper square sx={{ pb: "10px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Questions
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, question, ans, person }) => (
            <React.Fragment key={id}>
              {/* {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  All-Questions
                </ListSubheader>
              )} */}

              <Link
                to={{
                  pathname: "/single",
                  state: {
                    cQuestion: question,
                    listAns: ans,
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  title="Click to view all answers"
                  placement="top"
                  arrow
                  followCursor
                >
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>

                    <ListItemText primary={question} secondary={ans[0]} />

                    {/* ----- */}

                    {/* ----- */}
                  </ListItem>
                </Tooltip>
              </Link>
            </React.Fragment>
          ))}
        </List>
        {/* ---- */}
      </Paper>
    </React.Fragment>
  );
}
