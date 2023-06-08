import Paper from "@mui/material/Paper"

const Card = (props: any) => {

  const elevation = props.elevation ? props.elevation : 6
  const variant = elevation < 1 ? "outlined" : props.variant
  return (
    <Paper className={`card ${props.className}`} key={props.id} style={props.style}  sx={{ borderRadius: "8px"}} 
      elevation={elevation} 
      variant={variant} >
      {props.children}
    </Paper>
  )
}


export default Card


