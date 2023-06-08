import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Skeleton from "@mui/material/Skeleton"
import { nanoid } from "nanoid"


const CardLoader = () => {


  return (
    <>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}> 
      <Paper sx={{ backgroundColor: "#ffffff"}} elevation={0} >
        <Skeleton style={{ borderRadius: "4px 4px 0 0 "}}  animation="wave" variant="rectangular" width={"100%"} height={"10rem"} />
        <Box  style={{display: "flex", justifyContent: "space-between", padding: "1rem 0"}}>
          <Skeleton   animation="wave"  width="15%"  height="2rem"   >
          </Skeleton>
          <Skeleton   animation="wave"  height="2rem" width="40%"  >
          </Skeleton>
        </Box>
      </Paper>
    </Grid>
    </>
  )
}

export default CardLoader