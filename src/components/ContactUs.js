import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function NestedList() {
  return (
    <div id="ContactUs" class="bg_image">
      <List
        sx={{
          width: "100%",
          maxWidth: '25%',
          // bgcolor: "background.paper",
          padding: "2%",
          color: "white",
          margin: "10% 1% 0% 37%",
          display: "inline-block",
          opacity:'.9'
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            style={{ color: "white", fontSize: "larger", textAlign: "center", backgroundColor: "transparent"}}
            component="div"
            id="nested-list-subheader"
          >
            Contact Info
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <GitHubIcon style={{ color: "5893df" }} />
          </ListItemIcon>
          <a href="https://github.com/ReichertA2">
            <ListItemText
              style={{ color: "white" }}
              primary="https://github.com/ReichertA2 "
            />
          </a>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LinkedInIcon style={{ color: "5893df" }} />
          </ListItemIcon>
          <a href="https://www.linkedin.com/in/aydee-reichert">
            <ListItemText
              style={{ color: "white" }}
              primary="https://www.linkedin.com/in/aydee-reichert"
            />
          </a>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon style={{ color: "5893df" }}>
            <AccountBalanceIcon style={{ color: "5893df" }} />
          </ListItemIcon>

          <ListItemText
            style={{ color: "white" }}
            primary="1234 Main Street, Houston, TX"
          />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon style={{ color: "5893df" }}>
            <EmailIcon style={{ color: "5893df" }} />
          </ListItemIcon>

          <ListItemText style={{ color: "white" }} primary="email@yahoo.com" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>

        {/* <Collapse in={open} timeout="auto" unmountOnExit>
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

      
      <div style={{textAlign: "center"}}>
        <p style={{color:'white', margin:'17%'}}>Aydee Reichert &copy; 2022</p>
      </div>
    </div>
  );
}
