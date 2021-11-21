import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import "./Navigation.scss";


const TopNavigation = (props) => {
  const {isOpen, setMenu} = props;
  return (
    <div className="menuicon" >
      <IconButton onClick={() => { setMenu(isOpen ? false : true);}}>
        <MenuIcon style={{ fontSize: 40  }} />
      </IconButton>
    </div>
  );
}
 
export default TopNavigation;