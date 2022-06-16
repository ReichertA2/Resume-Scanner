import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function JobDescriptionsAccordion({job_url}) {
  
  return (
    <div >
      <Accordion sx={{width:'70%', backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Name: {job_url[0][0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {job_url[0][1]}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
     
    </div>
  );
}