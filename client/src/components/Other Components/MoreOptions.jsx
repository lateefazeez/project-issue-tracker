import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {useState} from 'react';


const MoreOptions= function(props) {
  const [targetElm, setTargetElm] = useState(null);
  
  const selections = ["Edit", "Delete"]
  
  const open = Boolean(targetElm);
  
  const handleClose = () => {
    setTargetElm(null);
  };
  
  return (
    <div>
      <IconButton
        aria-label="more"
        onClick={(event) => {setTargetElm(event.currentTarget)}}
        aria-haspopup="true"
        aria-controls="long-menu"
      >
        <MoreVertIcon sx={{color: 'white'}} />
      </IconButton>
      <Menu 
        anchorEl={targetElm} 
        keepMounted onClose={handleClose} 
        open={open}>
        {selections.map((option) => (
          <MenuItem
            key={option} 
            onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreOptions;