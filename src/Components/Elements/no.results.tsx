import Box from "@mui/material/Box"

type errText = {
  errorText: string
}

const errorStyle = {
  textAlign: "center",
  margin: "6rem"
}
const NoResults = ({errorText}: errText ) => {

  return (
    <>
      <Box sx={errorStyle}>
        <h1>{errorText}</h1>
      </Box>
    </>
  )
}

export default NoResults