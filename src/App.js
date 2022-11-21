import axios from "axios";
import React, { createContext, useEffect } from "react";
import Routing from "./Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export const ThemeValue = createContext();
export const CurrentThemeValue = createContext();
export const DataContext = createContext();
export const Fun = createContext();

function App() {
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
      // https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test
      // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/users"
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
  useEffect(() => {
    readData();
  }, []);

  function contextCall(){
    alert("hi");
  }
  return (
    <React.Fragment>
      <CurrentThemeValue.Provider value={themeMode}>
        <ThemeValue.Provider value={setTheme}>
          {/* <ThemeProvider theme={darkTheme}> */}
          <DataContext.Provider value={arrayL} >
            <Fun.Provider value={readData}>
              <Routing />
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={alert}
                  autoHideDuration={4000}
                  // onClose={handleClose}
                >
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
          {/* </ThemeProvider> */}
        </ThemeValue.Provider>
      </CurrentThemeValue.Provider>
      {/* -----------Back drop----------- */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={alert}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* ----------end------------------- */}
    </React.Fragment>
  );
}

export default App;
