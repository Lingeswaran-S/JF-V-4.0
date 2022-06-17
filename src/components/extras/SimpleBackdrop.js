import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import BottomAppBar from "./BottomAppBar";
import { Container } from "@mui/system";
import Routing from "../../Routing";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        class="pl-5 pr-5 mt-4"

        // onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}

        <BottomAppBar />

        <button onClick={handleClose}>close</button>
      </Backdrop>
    </div>
  );
}
