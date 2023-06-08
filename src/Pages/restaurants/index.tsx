import { apiQueries } from '@/Classes/Enums/apiQueries';
import queryFactory from '@/Classes/Helper/API.query.factory';
import RestaurantCategories from '@/Components/Filters/restaurants.categories';
import RestaurantsContainer from '@/Containers/Restaurants';
import RestaurantsDataProps from '@/Interfaces/restaurantsProps';
import { fetchRestaurantsData } from '@/Stores/Actions';
import wrapper, { AppDispatch } from '@/Stores/Store';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';


const Restaurants = ({restaurantsData}: RestaurantsDataProps) => {

  const state: any = useSelector( state => state)
  const foodType = state.filterReducer.value

  console.log("From Rest Client", state.dataReducer.data)
  const asideSticky = {
    position: "sticky",
    top: "20%" 
  } as React.CSSProperties
  
  return (
    <>
     
      <Box  sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <Grid container spacing={4} >
            <Grid  lg={2} item>
              <aside style={asideSticky} >
                <h5>Filtre</h5>
                <RestaurantCategories 
                  renderFilters
                /> 
              </aside>
            </Grid>
            <Grid lg={10} item>
              <h3> 
                {foodType ? `Livrare de ${foodType} in Bucuresti` : "Restaurante livrare in Bucuresti"}
              </h3>
              <RestaurantsContainer 
              restaurantsData={restaurantsData}
              />
            </Grid>
          </Grid> 
        </Container> 
      </Box>
      
    </>
  )
}

export default Restaurants


export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
  
  const query = queryFactory(apiQueries.category, `${context.query.category}`)
  await store.dispatch<AppDispatch>(fetchRestaurantsData(query))
  const storeSelector = await store.getState()

  return {
    props: {
      restaurantsData: storeSelector.dataReducer?.data
    }
  }
})