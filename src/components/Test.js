import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReadCompany from "./ReadCompany";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
function Test() {
  let [isNeedLoading, setLoading] = React.useState(true);
  const location = useLocation();
  let jobDetailFromPageList;
  if (location.state != undefined) {
    jobDetailFromPageList = location.state.req;
  }
  const currentURL = useLocation().pathname;
  
  let jobId;
  if (currentURL.includes("/jobs") || currentURL.includes("/jobs")) {
    jobId = currentURL.split("/").at(-1);
    // getJobDetailsByJobId(jobId);
  }
  let [jobDetail, setJobDetail] = React.useState(
    jobDetailFromPageList != undefined ? jobDetailFromPageList : []
  );
  function getJobDetailsByJobId(jobId) {
    setLoading(true);
    axios
      .get("https://jserverlinges.herokuapp.com/jobs/" + jobId)
      .then((res) => {
        setJobDetail(res.data);
        setLoading(false);
      });
  }
  useEffect(() => {
    if (jobDetailFromPageList == undefined) {
      getJobDetailsByJobId(jobId);
    }
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <ReadCompany jobDetail={jobDetail} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isNeedLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}

export default Test;
