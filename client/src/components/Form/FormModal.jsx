import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PrimaryButton from '../PrimaryButton';


import './FormModal.scss'

const style = {
  position: 'absolute',
  width: 550,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#4A474B',
  border: '1px solid #707070',
  boxShadow: 24,
  p: 1.5,
  borderRadius: 2.5
};

const FormModal = (props) => {


  const { handleOpen, children, onClose } = props;

  
  return ( 
    <div>
      <Modal
        open={handleOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="closeForm">
          <PrimaryButton style={{borderRadius: "50px", padding: "0", backgroundColor: "red"}} onPress={onClose}>X</PrimaryButton>
        </div>
        { children }
        </Box>
      </Modal>
  </div>
   );
}
 
export default FormModal;