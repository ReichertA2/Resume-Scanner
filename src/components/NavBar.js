import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";

export default function AccountMenu() {
  // const theme = useTheme();
  const { user } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav
      style={{
        display: "block",
        width: "95%",
        height: "75px",
        paddingTop: "15px",
      }}
    >
      <React.Fragment>
        <Link to="/">
          <HomeIcon style={{ color: "white", marginLeft: "2%" }} />
        </Link>
        <Link to="/UserFormsView">
          <AssignmentIcon style={{ color: "white", marginLeft: "2%" }} />
        </Link>
        <Link to="/UserInfoView">
          <AssessmentIcon style={{ color: "white", marginLeft: "2%" }} />
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            float: "right",
            color: "white",
          }}
        >
          <Link style={{textDecoration:'none'}} to="/ContactUsView">
            <Typography
              sx={{ minWidth: 100, color: "white", textDecoration: "none"}}
            >
              Contact Us
            </Typography>
          </Link>
          {/* <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {!user ? (
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.first_name[0].toUpperCase()}
                </Avatar>
              ) : (
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              )}
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {user.first_name ? (
            <section>
              <MenuItem>
                <Link
                  to="/RegisterEdit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar /> Register/Edit Profile
                </Link>
              </MenuItem>
              <MenuItem style={{ textDecoration: "none", color: "white" }}>
                <Link
                  to="/MyAccount"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Avatar /> My account
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem style={{ textDecoration: "none", color: "white" }}>
                <Link
                  to="/RegisterEdit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </Link>
              </MenuItem>
              {/* <MenuItem style={{ textDecoration: "none", color: "white" }}>
                <Link
                  to="/UnderConstructionView"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link
                  to="/logout"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </Link>
              </MenuItem>
            </section>
          ) : (
            <MenuItem>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Login
              </Link>
            </MenuItem>
          )}
        </Menu>
      </React.Fragment>
    </nav>
  );
}
