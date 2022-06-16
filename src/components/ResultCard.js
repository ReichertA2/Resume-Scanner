import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({jobs_hit,job_miss}) {
  return (
    <section>
    <Card sx={{ width: '30%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography sx={{color:'white'}} variant="h5" component="div">
          Results
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography sx={{color:'white'}} variant="body2">
          Missing words
          {job_miss.map((word,idx)=>(
          <li key={idx}> {word}</li>
          ))}
          <br />
          Matching words
          {jobs_hit.map((words,idx)=>(
            <li key={idx}>{words}</li>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </section>
  );
}