import Grid from "@mui/material/Grid"
import CardLoader from "@/Components/Elements/card.loading"


const CardWithLoading = (Component: any) => {
  return ({loading, ...componentProps}: any) => {
    if (!loading) {
      return <Component {...componentProps} />
    }

    return (
      <>
        <Grid container spacing={4}>
          <CardLoader /> 
        </Grid>
      </>
    ) 
  } 
}

export default CardWithLoading