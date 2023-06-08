import Paper from '@mui/material/Paper'

interface ModalButton {
  icon: string,
  label: string,
  handleClick?: () => void
}

const modalButtonStyle = {
  aspectRatio: "1 / 1",
  borderRadius: 40,
  width: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem"
  
}
const modalButtonImage = {
  objecFit: "cover",
  height: 60
}

const ModalButton = ({icon, label, handleClick}: ModalButton) => {

  return (
    <Paper sx={modalButtonStyle} onClick={handleClick} elevation={6} >
      <img style={modalButtonImage} src={icon} alt="" />
      <p style={{textAlign: "center"}}>{label}</p>
    </Paper>
  )
}

export default ModalButton