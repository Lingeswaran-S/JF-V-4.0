import * as React from "react";
import axios from "axios";
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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from "@mui/material";
import { DataContext, Fun } from "../App";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
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

export default function JobList() {
  let getAllJobDetails = React.useContext(Fun);
  let jobs = React.useContext(DataContext);
  function deleteJob(id) {
    setLoading(true);
    axios
      .delete("https://jserverlinges.herokuapp.com/jobs/" + id)
      // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
      // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
      .then((res) => {
        getAllJobDetails();
        setLoading(false);
      })
      .catch(() => {
        console.log("erroe while delete");
        setLoading(false);
      });
  }

  let [isNeedLoading, setLoading] = React.useState(false);

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
              {jobs.map((data, ind) => {
                return (
                  <TableRow
                    //   key={row.name}fontWeight: 'bold'
                    style={
                      ind % 2
                        ? {
                            background: "#2D142D",
                          }
                        : { background: "rgb(26 5 26)" }
                    }
                    // 2D142D
                    // 00cdac
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
                          color: ind % 2 ? "#FFFFFF" : "rgb(255 249 0)",
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
                            role: data.Position,
                          },
                        }}
                      >
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
                              : { color: "rgb(255 249 0)" ,textShadow: "0px 1px #ed9a09"}
                              
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
                    <Button onClick={() => deleteJob(data.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="50"
                        fill="red"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isNeedLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Card>
  );
}
