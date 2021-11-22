import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
  const { children, style } = props

  return ( 
      <Button style={style} onClick={() => console.log("Button Clicked")} variant='contained'>{ children }</Button>
   );
}
 
export default PrimaryButton;