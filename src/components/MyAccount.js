import React, { useContext} from "react";
import { AppContext } from "../context/AppContext";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function BasicCard() {
    const { user, setAlert, error } = useContext(AppContext);

  return (
   <section>
    <Card sx={{width:'50%', display: "inline-block",margin:'1%'}}>
        <CardHeader
        title="User Profile">
            
        </CardHeader>
        <CardContent sx={{ height:'600px',color: "white", padding:'1rem 1rem'}}>
            <h3>Name: {user.first_name} {user.last_name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Resume: </h3>
            <h3>Keyword: </h3>
          </CardContent>

    </Card>
    <img style={{margin:'1%', borderRadius:"15px", verticalAlign:"top", width:'45%', paddingTop:'5%'}} src="office.jpg" alt=""></img>

   </section>
  );
}
