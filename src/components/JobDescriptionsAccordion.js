import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function JobDescriptionsAccordion({job_url}) {
  
  return (
    <div >
              {job_url.map((url, idx)=>(

      <Accordion sx={{width:'70%', backgroundColor:"white"}}>

          {/* // < div key={idx}> */}

        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Name: {url[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
            {url[1]}
          </Typography>
        </AccordionDetails>
        {/* // </div> */}

      </Accordion>
      
      ))}

    </div>
  );
}