import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useKeyword from "../hooks/useKeyword";
import Error from "./Error";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  const { user, setAlert, error } = useContext(AppContext);
  let response = useKeyword(user).data;
  if (error || typeof response === "undefined") {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  let top_ten = response["word_count"];
  return (
    <div id="MyAccount" class="bg_image">
      <section>
        <Card
          sx={{
            width: "50%",
            display: "inline-block",
            marginLeft: "25%",
            color: "white",
          }}
        >
          <CardHeader title="User Profile"></CardHeader>
          <CardContent
            sx={{ height: "600px", color: "white", padding: "1rem 1rem" }}
          >
            <h3>
              Name: {user.first_name} {user.last_name}
            </h3>
            <h3>Email: {user.email}</h3>
            <h3 style={{ marginBottom: "0px" }}>Resume: {response["name"]}</h3>
            <h6 style={{ margin: ".5rem 2rem" }}>
              Last Updated: {response["created_on"]}{" "}
            </h6>
            <h6 style={{ margin: ".5rem 2rem" }}>
              Keyword/Phrase Count Hit:{" "}
              {response["jd_results"]["phrase_matches"]["phrase_hit"].length}{" "}
            </h6>
            {/* <h6 style={{ margin: ".5rem 2rem" }}>Top 10 Words: </h6> */}
            {/* <div>
              {top_ten.map((word, idx) => (
                <p key={idx}>{word}</p>
              ))}
            </div> */}
          </CardContent>
        </Card>
        {/* <img style={{margin:'1%', borderRadius:"15px", verticalAlign:"top", width:'45%', paddingTop:'5%'}} src="office.jpg" alt=""></img> */}
      </section>
    </div>
  );
}
