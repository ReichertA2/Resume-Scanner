import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';





export default function ColorsTimeline() {
  return (
    <Timeline orientation="horizontal" position="right" >
      <TimelineItem sx={{color: 'white'}}>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Click on briefcase icon</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{color: 'white'}}>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Paste in resume and click submit</TimelineContent>
      </TimelineItem>
      
      <TimelineItem sx={{color: 'white'}}>
        
        <TimelineSeparator>
          <TimelineDot color="primary" />
          
        </TimelineSeparator>
        <TimelineContent>Paste in job description URL and click submit</TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}