import Button from '@mui/material/Button';


interface ButtonStyle {
  color: string,
  textColor?: string,
  className?: string
}

interface ButtonActions {
  label: string,
  onClick: () => any
}


// un fisier pentru tot style-ul din react - > cu merge intre ele

const AppButton = ({color, textColor, className, label, onClick}: ButtonStyle & ButtonActions ) => {
  const buttonThemeColor = color == "primary" ? "primary" : "secondary"
  const buttonStyle = {
    textTransform: "capitalize", 
    fontWeight: "700", 
    height: 44, 
    padding:"0 32px",
    color: textColor ? textColor : "#fff",
    backgroundColor: color,
    borderRadius: "2rem"
  }

  return (
    <Button 
      className={className}
      sx={buttonStyle} 
      color={buttonThemeColor}
      onClick={onClick} 
      disableElevation={true}
      variant="contained" >
        {label}
    </Button>
  )
}

export default AppButton