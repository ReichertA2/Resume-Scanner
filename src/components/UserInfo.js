import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import EditIcon from "@mui/icons-material/Edit";
import JobDescriptionsAccordion from "./JobDescriptionsAccordion";
import ResultCard from "./ResultCard";
import useKeyword from "../hooks/useKeyword";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function UserInfo() {
  const { user, setAlert, error } = useContext(AppContext);
  // const{keywords, error} = useKeyword();
  const navigate = useNavigate();

  let response = useKeyword(user).data;

  console.log("response from hook", response);

  if (error || !response) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  console.log("user info", user);

  if (!user) {
    console.log("no keywords", user);
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <article
      sx={{ margin: "0px auto", width: "100%", backgroundColor: "yellow",display:'inline-block' }}
    >
      {/* <section
        sx={{
          width: "45%",
          backgroundColor: "red",

          display: "inline-block",
        }}
      > */}
        <Card
          sx={{
            width: "45%",
            padding:'0px 2rem 3rem ',
            // margin: "0px",
            display: "inline-block",
            // paddingTop: "2%",
            // paddingLeft: "4%",
            fontSize: ".75rem",
            maxHeight: "750px",
            minHeight:'700px', 
            verticalAlign:'top'
            // scrollbarWidth: "none",
          }}
        >
          <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={response["name"]}
            sx={{ color: "white", 

          }}
          />

          <CardContent sx={{ height:'600px',color: "white", padding:'1rem 1rem', overflowY: "scroll"}}>
            {response["desc"]}
          </CardContent>
          <Button type="delete" sx={{  margin: "1rem 40%"}}>
          Delete
        </Button>
          <IconButton sx={{ color: "#5893df", margin:'1rem 0rem' }} aria-label="Edit Resume">
            <Link to="/UserFormsView">
              <EditIcon style={{ color: "5893df" }} />
            </Link>
          </IconButton>
          
        </Card>
      {/* </section>

      <section
        sx={{
          width: "45%",
          backgroundColor: "red",

          display: "inline-block",
        }}
      > */}
        <Card
          sx={{
            width: "45%",
            margin: "0px",
            marginLeft: "1%",
            display: "inline-block",
          }}
        >
          <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Job Descriptions"
            sx={{ color: "white", 
            display: "inline-block",}}
          />

          <CardContent  sx={{ color: "white", 
            display: "inline-block",}}>
            <JobDescriptionsAccordion job_url={response["job_desc_info"]} />
          </CardContent>
          <IconButton sx={{ color: "#5893df", margin:'1rem 1rem 1rem 90%' }} aria-label="Edit Resume">
            <Link to="/UserFormsView">
              <EditIcon style={{ color: "5893df" }} />
            </Link>
          </IconButton>
          <ResultCard
          jobs_hit={response["jd_results"]["phrase_matches"]["phrase_hit"]}
          job_miss={response["jd_results"]["phrase_matches"]["phrase_miss"]}
        />
        </Card>
 
      {/* </section> */}
    </article>
  );
}
