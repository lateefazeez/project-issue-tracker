import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import PropTypes from "prop-types"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ProjectTable from './ProjectTable';
import Button from "./PrimaryButton";
import './Navigation.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProjectDashboard from './ProjectDashboard';
import TicketPage from './TicketPage';
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
  const {
    logoutUser,
    children,
    loggedInUser,
    setLoggedInUser,
    userIdFromSession,
    userNameFromSession
  } = props;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate()

  const logout = () => {
    setLoggedInUser(null)
    logoutUser()
    navigate("/signup")
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="topbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon  style={{ fontSize: 40,}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer className="navbar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#212129',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} className="closebutton">
            <MenuIcon style={{ fontSize: 40, color: 'white'}} />
          </IconButton>
        </DrawerHeader>
          <div className="user">
          <AccountCircleIcon sx={{fontSize: 80}} />
          {loggedInUser ? <h3 className="logged-user">{loggedInUser.name }</h3> : <h3 className="logged-user">{userNameFromSession }</h3>}
          </div>
        <hr className="divider" ></hr>
        <List className="navitems">
          {[ <Link to="/navigation">Dashboard</Link>, 'My account', 'My issues', "Chat", "Board", "Archive"].map((text, index) => (
            <ListItem button key={text} style={{color: "#BCBABA"}}>
              <ListItemIcon>
                { index % 2 === 0 ? <DashboardIcon style={{color: "#BCBABA"}} /> : <FormatListBulletedIcon style={{color: "#BCBABA"}} />}
              </ListItemIcon>
              <ListItemText primary={text} className="navitems" />
            </ListItem>
          ))}
        </List>
        <Divider className="divider"/><br></br>
        <div className="trademark--logout">
        <div className='logout-button'>
          <Button style={{backgroundColor: "red"}} children={"Logout"} onPress={logout} />
        </div>
    
          <div className="navfooter">
            <p>Powered by:</p>
            <p>Lateef, Matt, & Aman</p>
          </div>
   
        </div>
      
      </Drawer>
        <Main open={open}>
        <DrawerHeader />
          { children }
        </Main>      
    </Box>
  );
}


PersistentDrawerLeft.defaultProps = {
  loggedIn: false
  
}

PersistentDrawerLeft.propTypes = {
  loggedIn: PropTypes.bool,
  name: PropTypes.string,
  imageUrl: PropTypes.string
}
 