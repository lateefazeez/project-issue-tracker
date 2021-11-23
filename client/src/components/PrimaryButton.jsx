import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
  const { children, style, onPress } = props

  return ( 
      <Button style={style} onClick={onPress} variant='contained'>{ children }</Button>
   );
}
 
export default PrimaryButton;