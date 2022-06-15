import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NestedList() {
 

 

  return (
    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', padding:'2%', color:'white'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader style={{color:'white', marginLeft:'30%'}} component="div" id="nested-list-subheader">
          Contact Info
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <GitHubIcon style={{color: '5893df'}} />
        </ListItemIcon>
        <ListItemText primary="https://github.com/ReichertA2 " />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LinkedInIcon style={{color: '5893df'}} />
        </ListItemIcon>
        <ListItemText primary="https://www.linkedin.com/in/aydee-reichert" />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        {/* <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton> */}
        {/* </List> */}
    {/* </Collapse> */}
    </List>
  );
}