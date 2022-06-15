import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import EditIcon from '@mui/icons-material/Edit';
import JobDescriptionsAccordion from './JobDescriptionsAccordion';

export default function RecipeReviewCard() {
  return (
  
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Resume Title"
        sx={{color: 'white'}}
        
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
        <IconButton sx={{color: '#5893df'}} aria-label="Edit Resume">
          <EditIcon />
        </IconButton>

        <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Job Descriptions"
        sx={{color: 'white'}}
        
      />
      
      <CardContent>
        <JobDescriptionsAccordion/>
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
        <IconButton sx={{color: '#5893df'}} aria-label="Edit Resume">
          <EditIcon />
        </IconButton>


        
        
    </Card>


    

    
  );
  
}

