import Modal from '@mui/material/Modal';
import ModalButton from '@/Components/Buttons/modal.button';
import { useState } from 'react';

const ModalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: "none",
  outline: "none",
  backgroundColor: "#fff3da",
  padding: 100,
  borderRadius: "100%",
  aspectRatio: "1 / 1"
  
}

const ModalWithChildren = ({children, button, buttonImage, label}: any) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ModalButton handleClick={handleOpen} icon={buttonImage} label={label}/>
      <Modal
         
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={ModalStyle}>
            {children}
          </div>
        

      </Modal>
    </>
  )
}
export default ModalWithChildren