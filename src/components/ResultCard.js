import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ jobs_hit, job_miss }) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "inline-block",
        maxHeight:'520px',
        border:'0px'
        
      }}
    >
      <CardHeader
        sx={{ color: "white", width: "100%", height: "2%",  }}
        variant="h5"
        component="div"
        title="Results"
      ></CardHeader>
      <CardContent sx={{border:'0px', }}>
        <Typography
          sx={{
            mb: 1.5,
            color: "white",
            display: "inline-block",
            width: "45%",
            verticalAlign: "top",
          }}
          color="text.secondary"
        >
          Missing Phrases
          <div sx={{ display: "inline-block", width: "25%" }}>
            {job_miss.map((word, idx) => (
              <p key={idx} sx={{ padding: "0px .5rem" }}>
                {" "}
                {word}
              </p>
            ))}
          </div>
        </Typography>
        <Typography
          sx={{
            color: "white",
            width: "45%",
            display: "inline-block",
            // verticalAlign: "top",
          }}
          variant="body2"
        >
          Matching Phrases
          <div sx={{ display: "inline-block", width: "25%" }}>
            {jobs_hit.map((words, idx) => (
              <p key={idx}>{words}</p>
            ))}
          </div>
        </Typography>
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
}
