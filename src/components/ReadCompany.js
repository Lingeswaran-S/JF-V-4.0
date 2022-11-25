import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
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

export default function ReadCompany(props) {

  const location = useLocation();
  let req;
  if (props.jobDetail != undefined) {
    req = props.jobDetail;
  } else {
    req = location.state.req;
  }

  const name = req.company;
  const role = req.Position;
  const link = req.regLink !== undefined ? req.regLink : "Not";
  let reqList = [];
  function process() {
    for (const key in req) {
      if (key !== "company" && key !== "id" && key !== "regLink") {
        reqList.push([key, req[key]]);
      }
    }
  }
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
  function copyToClipBoard() {
    navigator.clipboard.writeText(document.URL);
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
            {name != undefined ? name[0] : ""}
          </Avatar>
        }
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
                  req[0] != "moreDetails" && (
                    <TableRow
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
                  )
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton>{btn_or_test()}</IconButton>
        <Tooltip TransitionComponent={Zoom} title="Copy link"  placement="top">
        <Button onClick={copyToClipBoard()}>
          <ContentCopyRoundedIcon sx={{color:"#09ebc1"}} />
        </Button>
        </Tooltip>
        
        <Link to="/jobs" class="ml-2" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            size="small"
            color="info"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Go Back
          </Button>
        </Link>
        {req.moreDetails && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Box position="relative" display="inline-flex">
              <CircularProgress size={28} color="error" />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ExpandMoreIcon />
              </Box>
            </Box>
            {/* <ExpandMoreIcon /> */}
          </ExpandMore>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            backgroundColor: "white",
            margin: "15px",
            borderRadius: "3px",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: req.moreDetails }} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
