import { apiQueries } from "@/Classes/Enums/apiQueries";
import queryFactory from "@/Classes/Helper/API.query.factory";
import { Spacing } from "@/Classes/Helper/Spacing.style";
import capitalize from "@/Classes/Helper/capitalize";
import Card from "@/Components/Cards/Card";
import CardFooter from "@/Components/Cards/Card.footer";
import CardHeader from "@/Components/Cards/Card.header";
import Cart from "@/Components/Cart";
import Menu from "@/Containers/Food.menu";
import { Restaurant } from "@/Interfaces/restaurant";
import logoWhite from "@/StaticFiles/SVGs/logo-white.svg";
import { fetchRestaurantsData } from "@/Stores/Actions";
import wrapper, { AppDispatch } from "@/Stores/Store";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

 const RestaurantPage = ({restaurantData}: {restaurantData: Restaurant}) => {

  // Styles
  const spacingStyle = new Spacing
  spacingStyle.setPadding("2rem");
  const customPadding = spacingStyle.style

  const state: any = useSelector( state => state)
  
  return (
    <Box className="restaurant-page__wrapper" >
      <div className="restaurant-page__bg-image">
        <img src={restaurantData && restaurantData?.picture} />
      </div>
      <Container maxWidth="xl" >
        <div style={{padding: "2rem 0"}}>
          <img src={logoWhite.src} width="119px" />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={9}> 
            <Card style={customPadding} className="restaurant-page__header-wrapper">
              <CardHeader name={restaurantData?.name} />
              <CardFooter justifyContent="flex-start" 
              rating={restaurantData?.rating}
              delivery={restaurantData?.delivery}
              />
            </Card>
            <Menu menuData={restaurantData?.menu}/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={customPadding}>
              <CardHeader name="glovo-ul tau" />
              <Cart  />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default RestaurantPage

export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
  
  const restaurantName = context.query.restaurant && capitalize(`${context.query.restaurant}`?.split("-").join(" "))
  const query = queryFactory(apiQueries.search, `${restaurantName}`)
  await store.dispatch<AppDispatch>(fetchRestaurantsData(query))
  const storeSelector = await store.getState()
  return {
    props: {
      restaurantData: storeSelector.dataReducer.data[0]
    }
  }
})