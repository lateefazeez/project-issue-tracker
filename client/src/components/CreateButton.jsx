import Button from '@mui/material/Button';

const CreateButton = (props) => {

  return ( 
    <div>
      <Button style={{ backgroundColor: "#4D45B5"}} onClick={() => console.log("Cicked Create Button")} variant='contained'>Create</Button>
    </div>
   );
}
 
export default CreateButton;