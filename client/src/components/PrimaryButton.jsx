import Button from '@mui/material/Button';

const PrimaryButton = (props) => {

  return ( 
    <div>
      <Button style={{ backgroundColor: "#4D45B5"}} onClick={() => console.log("Cicked Cancel Button")} variant='contained'>{props.label}</Button>
    </div>
   );
}
 
export default PrimaryButton;