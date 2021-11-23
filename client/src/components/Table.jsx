import ListMaker from "./List";
import TablePaginations from "./slider/TablePaginations";
import PrimaryButton from "./PrimaryButton";
import CommentEntry from "./CommentEntry";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Button } from "@mui/material";

// import { Tasks, Teams, Tickets, Comments, Projects } from "./testdata";

const Header = (props) => {
  const { decider } = props;

  if (props.decider === "Task") {
    return (
        <h5 class="super-head">Progress</h5>
    );
  } else if (props.decider === "Team") {
    return (
          <div class="tick-div">
            <h4 class="super-head">Team</h4>
            <div className="new-ticket"><PrimaryButton children = "+ Member"/></div>
          </div>
    );
  } else if (props.decider === "Ticket") {
    return (
      <div class="tick-div">
      <h4 class="super-head">Tickets</h4>
      <div className="new-ticket"><PrimaryButton children = "+ New Ticket"/></div>
      </div>
    );
  } else if (props.decider === "Comment") {
    return (
      <h4 class="super-head">Comments</h4>
    );
  } else if (props.decider === "Devs") {
    return (
      <h5 class="super-head">Assigned Devs</h5>
    );
  }
}


const AddButtons = (props) => {

  const { decider } = props;

   console.log("im props " + props.decider)

  if (props.decider === "Ticket" || props.decider === "Team"){
    return (
    <TablePaginations/>
    );
  } else if (props.decider === "Comment") {
    return(
    <CommentEntry/>
    );
  } else {
    return "";
  }
}

const AddList = (props) => {

  const { decider, height, width, mWidth } = props;
  console.log(mWidth)
if (props.decider === "Devs" || props.decider === "Task" || props.decider === "Comment"){
return(
  <Box sx={{ width: {width}, maxWidth: {mWidth}, bgcolor: 'background.paper' }}>
        <List id={props.decider + "superList"}
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: {height},
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
          >
          <ListMaker decider={decider}/>
          </List>
        </Box>
);
} else {
  return (<ListMaker decider={decider}/>);
};
}

const Table = (props) => {
  const { decider, height, width, mWidth } = props;
  

  return (
    <div>
      <div className="projects-box-header" id={props.decider + "-top"}>
        <Header decider={decider}/>
      </div>
      <AddList decider={decider} height={height} width={width} mWidth={mWidth}/>
      <div className="projects-box-footer"id={props.decider + "-bottom"}>
            <AddButtons decider={decider}/>
        </div>
    </div>
  );
};

export default Table;
