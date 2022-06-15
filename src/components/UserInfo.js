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
import {useNavigate} from 'react-router-dom';
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { AppContext } from '../context/AppContext'

export default function UserInfo() {
  const {user, setAlert, error} =useContext(AppContext)
  // const{keywords, error} = useKeyword();
  const navigate = useNavigate()

  useKeyword(user);

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  console.log("user info",user)

  
  if (!user) {
    console.log("no keywords", user)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  


  return (
    <article sx={{ margin:'0px auto'}}>
      {/* <section
        sx={{
          display: "inline-block",
          // width: "45%",
          backgroundColor: "yellow",
        }}
      > */}
        <Card sx={{ width: "25%", margin:'0px' , display: "inline-block"}}>
          <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Resume Title"
            sx={{ color: "white" }}
          />

          <CardContent>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={20}
              placeholder="Resume Text"
              style={{ width: 200 }}
            />
          </CardContent>

          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
          <IconButton sx={{ color: "#5893df" }} aria-label="Edit Resume">
            <EditIcon />
          </IconButton>
        </Card>
      {/* </section> */}

      {/* <section sx={{ display: "inline-block", 
      // width: "45%" 
      }}> */}
        <Card sx={{ 
          width: "35%", 
          margin:'0px',
          marginLeft:'1%',
          display: "inline-block"}}>
          <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Job Descriptions"
            sx={{ color: "white", padding: "18px" }}
          />

          <CardContent>
            
            <JobDescriptionsAccordion />
           
            {/* <TextareaAutosize
        aria-label="minimum height"
        minRows={20}
        placeholder=""
        style={{ width: 200 }}
        /> */}
          </CardContent>

          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
          <IconButton sx={{ color: "#5893df" }} aria-label="Edit Resume">
            <EditIcon />
          </IconButton>
        </Card>
      {/* </section> */}
      <ResultCard/>
     
    </article>
  );
}
