import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
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
  // --------------
  const location = useLocation();
  const { req } = location.state;
  const { name } = location.state;
  const { role } = location.state;
  const { link } = location.state;
  let reqList = [];

  function process() {
    for (const key in req) {
      if (key !== "company" && key !== "id" && key !== "regLink") {
        reqList.push([key, req[key]]);
      }
    }
  }
  // --------------
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function btn_or_test() {
    if (link !== "Not") {
      return (
        <a
          href={link !== "Not" ? link : ""}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" size="small">
            Apply / Register
          </Button>
        </a>
      );
    }
    if (link === "Not") {
      return (
        <Button variant="contained" size="small" color="error">
          Link unavailable
        </Button>
      );
    }
  }

  return (
    <Card
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(51, 156, 255,0.6), rgba(89, 96, 255,0.9) 43%, rgb(215, 19, 230))",
      }}
    >
      {/* sx={{ bgcolor: "rgba(20, 225, 220,0.3)" }} */}
      {/* 1-   linear-gradient(90deg, rgb(49, 9, 42), rgb(14, 3, 49)) */}
      <CssBaseline />
      {process()}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        // action={
        //   // disabled
        //   <div>
        //     <strong
        //       style={{ visibility: link !== "Not" ? "hidden" : "block" }}
        //       class="text-danger"
        //     >
        //       Registeration or Apply link not available
        //     </strong>
        //   </div>
        // }
        title={<strong>{name}</strong>}
        subheader={
          <strong
            style={{
              textDecoration: "none",
              textShadow: "1px 1px #ed9a09",
              color: "#8a6707",
            }}
          >
            {role !== undefined ? role : ""}
          </strong>
        }
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, bgcolor: "rgba(240, 255, 240,0.3)" }}
            aria-label="simple table"
          >
            <TableBody>
              {reqList.map((req, ind) => {
                return (
                  <TableRow
                    //   key={row.name}fontWeight: 'bold'
                    style={
                      ind % 2
                        ? { background: "rgba(230, 255, 240,0.3)" }
                        : { background: "" }
                    }
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      {req[0]}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      {req[1]}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          {/* <FavoriteIcon /> */}
          {btn_or_test()}
        </IconButton>
        <IconButton>
          <Link to="/jobs" class="ml-2" style={{ textDecoration: "none" }}>
            <Button>Go Back</Button>
          </Link>
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
          {/* -------------About COmpany------------------- */}
          <Typography paragraph>Method:</Typography>
          <Typography paragraph class="text-justify">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph class="text-justify">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph class="text-justify">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography class="text-justify">
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
