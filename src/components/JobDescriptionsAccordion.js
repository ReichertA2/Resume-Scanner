import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function JobDescriptionsAccordion({jobs_hit},{job_miss}) {
  console.log(jobs_hit);
  return (
    <div >
      <Accordion sx={{width:'70%', backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Job Description 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {jobs_hit}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width:'70%', backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Job Description 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}