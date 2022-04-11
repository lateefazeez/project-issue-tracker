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
import PersistentDrawerLeft from './Navigation2.0';



export default function PersistentDrawerTicket(props) {
  const {
    data,
    taskCreate,
    taskUpdate,
    taskDelete,
    getTicketId,
    userTicketCreate,
    userTicketDelete,
    TaskBar,
    TimeBar,
    TicketComments,
    TicketDevs,
    TicketTasks,
    LoneTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    updateStatus,
    statusUpdate,
    commentCreate,
    commentDelete,
    userProjectCreate,
    userProjectDelete,
    loggedInUser,
    logoutUser,
    setLoggedInUser,
    userIdFromSession,
    userNameFromSession
  } = props;

  return (
    <PersistentDrawerLeft logoutUser={logoutUser} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} userIdFromSession={userIdFromSession} userNameFromSession={userNameFromSession}>
      <TicketPage
              data={data}
              taskCreate={taskCreate}
              taskUpdate={taskUpdate}
              taskDelete={taskDelete}
              getTicketId={getTicketId}
              userTicketCreate={userTicketCreate}
              userTicketDelete={userTicketDelete}
              TaskBar={TaskBar}
              TimeBar={TimeBar}
              TicketComments={TicketComments}
              TicketDevs={TicketDevs}
              TicketTasks={TicketTasks}
              LoneTicket={LoneTicket}
              createTicket={createTicket}
              updateTicket={updateTicket}
              deleteTicket={deleteTicket}
              updateStatus={updateStatus}
              statusUpdate={statusUpdate}
              commentCreate={commentCreate}
              commentDelete={commentDelete}
              userProjectCreate={userProjectCreate}
              userProjectDelete={userProjectDelete}
              loggedInUser={loggedInUser}
              userIdFromSession={userIdFromSession}
              userNameFromSession={userNameFromSession} />
      
    </PersistentDrawerLeft>
  );
}

 