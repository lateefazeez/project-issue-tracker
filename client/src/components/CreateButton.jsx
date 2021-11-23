import Button from '@mui/material/Button';

const CreateButton = (props) => {
  const { buttonClick } = props

  return ( 
    <div>
      <Button style={{ backgroundColor: "#4D45B5", paddingLeft: "2rem", paddingRight: "2rem"}} onClick={buttonClick} variant='contained'>+ New Project</Button>
    </div>
   );
}
 
export default CreateButton;