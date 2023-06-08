import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RestaurantsContainer from '@/Containers/Restaurants';
import { useSelector } from 'react-redux';
import capitalize from '@/Classes/Helper/capitalize';
import RestaurantsRepository from '@/Classes/Repositories/restaurants.repository';
import { Server } from '@/Classes/Enums/server.enums';
import RestaurantsDataProps from '@/Interfaces/restaurantsProps';
import { apiQueries } from '@/Classes/Enums/apiQueries';
import wrapper, { AppDispatch } from '@/Stores/Store';
import queryFactory from '@/Classes/Helper/API.query.factory';
import { fetchRestaurantsData } from '@/Stores/Actions';


const SearchPage = ({restaurantsData}: RestaurantsDataProps) => {

  const state: any = useSelector( state => state)
  const searchTerm = state.searchReducer.value
  return (
    <>
      <Box  sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <Grid container spacing={4} >
            <h3> 
              {searchTerm ? `Toate rezultatele pentru '${searchTerm}' in Bucuresti` : "Toate restaurantele din Bucuresti"}
            </h3>
            <RestaurantsContainer
            restaurantsData={restaurantsData} />
          </Grid> 
        </Container> 
      </Box>
      
    </>
  )
}

export default SearchPage

// export async function getServerSideProps(context: any) {

//   const restaurantQuery: any = context.query.q
//   const restaurantName = restaurantQuery && capitalize(restaurantQuery?.split("-").join(" "))
  
//   const query = [
//     {key: apiQueries.search,
//     value: restaurantName}
//   ]

//   const restaurantRepoInstance = new RestaurantsRepository(Server.url)
//   const res = await restaurantRepoInstance.get(Server.pathRestaurants, query)
//   const data = res.data

//   return { props: { 
//     restaurantsData: data } 
//   }
// }

export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
  
  const query = queryFactory(apiQueries.search, `${context.query.q}`)
  await store.dispatch<AppDispatch>(fetchRestaurantsData(query))
  const storeSelector = await store.getState()
  const tempData = storeSelector.dataReducer?.data
  console.log(query)
  return {
    props: {
      restaurantsData: tempData !== undefined ? tempData : []
    }
  }
})