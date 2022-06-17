import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import PersonSearchSharpIcon from "@mui/icons-material/PersonSearchSharp";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { DataContext } from "../App";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  console.log("JobsList");
  let rD = React.useContext(DataContext);

  let arrayList = rD;

  return (
    <Card
      sx={{
        backgroundImage:
          "linear-gradient(0deg, rgba(12,205,163,1) 0%, rgba(193,252,211,1) 44%)",
        //1- linear-gradient(0deg, rgba(12,205,163,1) 0%, rgba(193,252,211,1) 44%)
      }}
    >
      {/* sx={{ bgcolor: "rgba(20, 225, 220,0.3)" }} */}
      <CssBaseline />

      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     C
        //   </Avatar>

        // }
        title="Companies"
        // subheader={role !== undefined ? role : ""}
        style={{
          color: "blue",
          textShadow: "1px 1px #ed9a09",
        }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
              bgcolor: "rgba(240, 255, 240,0.3)",

              tableLayout: "fixed",
            }}
            aria-label="simple table"
          >
            <TableBody>
              {arrayList.map((data, ind) => {
                return (
                  <TableRow
                    //   key={row.name}fontWeight: 'bold'
                    style={
                      ind % 2
                        ? {
                            background: "#2D142D",
                          }
                        : { background: "#00cdac" }
                    }
                    sx={{
                      td: { border: 0 },
                    }}
                    // sx={{
                    //   "&:last-child td, &:last-child th": { border: 0 },
                    // }}
                  >
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      <Link
                        // style={{
                        //   textDecoration: "none",
                        //   textShadow: "0px 1px #ed9a09",
                        //   color: "#7a4905",
                        // }}
                        style={{
                          color: ind % 2 ? "#FFFFFF" : "rgba(184,0,0,1)",
                          textDecoration: "none",
                          textShadow: "0px 1px #ed9a09",
                        }}
                        to={{
                          pathname: "/read",
                          state: {
                            name: data.company,
                            req: data,
                            link:
                              data.regLink !== undefined ? data.regLink : "Not",
                            // data.regLink !== undefined ? data.regLink : "Not",
                            role: data.Position,
                          },
                        }}
                      >
                        {/* <button class="btn btn-secondary mb-1 "> */}
                        <strong
                          style={{
                            wordWrap: "break-word",
                          }}
                        >
                          {data.company}
                        </strong>
                        {/* </button> */}
                        {/* <span>{data}</span> */}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {data.Position !== undefined ? (
                        //data.Link_valid_till
                        <Typography
                          //   style={{
                          //     color: "green",
                          //   }}
                          style={
                            ind % 2
                              ? {
                                  color: "#FFFFFF",
                                }
                              : { color: "red" }
                          }
                        >
                          {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="16"
                              fill="#06c465"
                              class="bi bi-person-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> */}
                          <PersonSearchSharpIcon sx={{ mb: 0, mr: 1 }} />
                          <strong>{data.Position}</strong>
                        </Typography>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="11"
                          fill="currentColor"
                          class="bi bi-align-end"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
                        </svg>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
