import axios from "axios";
import React, { createContext, useEffect } from "react";
import Routing from "./Routing";
import UploadJob from "./UploadJob";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import jwt_decode, { JwtPayload } from "jwt-decode";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export const ThemeValue = createContext();
export const CurrentThemeValue = createContext();
export const DataContext = createContext();
export const Fun = createContext();
export const UserContext = createContext();

let preUser = "ji";

function App() {
  let [user, setGoogleUser] = React.useState({});
  let [isSuperUser, setIsSuperUser] = React.useState(false);
  let [themeMode, setThemeMode] = React.useState(true);
  let [alert, setAlert] = React.useState(false);
  function handleClose() {
    setAlert(false);
  }
  const darkTheme = createTheme({
    palette: {
      mode: themeMode ? "light" : "dark",
    },
  });
  function setTheme() {
    setThemeMode(!themeMode);
  }

  document.body.style =
    "background:  linear-gradient(90deg, #0cbaba 0%, #380036 74%)";
  // linear-gradient(90deg, rgb(49, 9, 42), rgb(14, 3, 49));
  // document.body.style = "background:rgb(0, 30, 60)";
  // linear-gradient(90deg, rgb(114, 80, 213) 0px, rgb(170, 71, 165) 50%, rgb(244, 58, 103) 99%)
  // document.body.style = "background:#73adaa";

  let [arrayL, setArrayList] = React.useState([]);
  function readData() {
    axios
      .get("https://jserverlinges.herokuapp.com/jobs")
      .then((res) => {
        setArrayList(res.data);
        setAlert(false);
      })
      .catch(() => {
        setTimeout(() => {
          setAlert(true);
          // window.location.reload();
          readData();
        }, 3000);
      });
  }
  function afterGoogleResponse(response) {
    setGoogleUser(jwt_decode(response.credential));
    if (user.email == "linges0103@gmail.com") {
      setIsSuperUser(true);
    }
  }
  useEffect(() => {
    readData();
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "608633983795-0nomnle3ssf788a1pn7ha7do7akiud21.apps.googleusercontent.com",
      callback: afterGoogleResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, [user]);

  return (
    <React.Fragment>
      {/* <div id="signIn"></div> */}

      <CurrentThemeValue.Provider value={themeMode}>
        <UserContext.Provider
          value={{
            user: user,
            setGoogleUser: setGoogleUser,
            isSuperUser: user.email === "linges0103@gmail.com",
          }}
        >
          <ThemeValue.Provider value={setTheme}>
            <DataContext.Provider value={arrayL}>
              <Fun.Provider value={readData}>
                <Routing />
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Snackbar open={alert} autoHideDuration={4000}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Error ! Network connection Wait !
                    </Alert>
                  </Snackbar>
                </Stack>
              </Fun.Provider>
            </DataContext.Provider>
          </ThemeValue.Provider>
        </UserContext.Provider>
      </CurrentThemeValue.Provider>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={alert}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}

export default App;
