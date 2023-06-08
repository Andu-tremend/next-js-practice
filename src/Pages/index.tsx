import { apiQueries } from '@/Classes/Enums/apiQueries';
import queryFactory from '@/Classes/Helper/API.query.factory';
import CourierAnimation from '@/Components/Animations/courier.slide';
import RestaurantCategories from '@/Components/Filters/restaurants.categories';
import CategoriesWidget from "@/Containers/Hero.categories.widget";
import RestaurantsContainer from '@/Containers/Restaurants';
import images from '@/Helper.functions/static.images';
import { Restaurant } from '@/Interfaces/restaurant';
import { fetchRestaurantsData } from '@/Stores/Actions';
import wrapper, { AppDispatch } from '@/Stores/Store';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../Components/Buttons/button/button';
import RestaurantService from '@/Classes/Services/Restaurant.service';
import { Server } from '@/Classes/Enums/server.enums';

const {riderImage, partnersImage, careersImage, citiesImage, shakeHandsImg, deliveryMan, deliveryBag} = images

const Homepage = ({restaurants, otherData}: {restaurants: Restaurant[], otherData: any}) => {

  const theme = useTheme()
  const router = useRouter()
  
  return (
    <>
      <Box className="hp__yellow-wrapper" sx={{  height: '100%' }}>
        <Container maxWidth="lg" sx={{textAlign: "center"}}>
          <h3>Livreare la Soseaua Virtutii</h3>
        </Container>
        <CategoriesWidget />
      </Box>
      <Box className="hp__filter-wrapper" sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <h3 className='highlighted-heading'>Mancare langa tine</h3>
          <Grid container spacing={4} >
            <Container maxWidth="lg" sx={{marginTop: 4}}>
              <RestaurantsContainer nrOfRestaurants={9}
              restaurantsData={restaurants}/>
            </Container>
          </Grid>
          <Box sx={{display: "flex", justifyContent: "center", padding: 10}}>
            <AppButton  
              textColor={theme.palette.secondary.main} 
              color={theme.palette.secondary.light} 
              label='Vezi mai multe restaurante' 
              onClick={() => {router.push("/restaurants")}}
              />
          </Box>
          <Box className='flex-center flex-column'>
            <img src={citiesImage} alt="cities" />
            <CourierAnimation image={deliveryMan} altText="alt text" />

            <h2>Cele mai bune Categorii din Bucuresti</h2>
            <Box sx={{marginTop: 3, display: "inline-flex", flexWrap: "wrap", gap:1, justifyContent: "center"}}>
              <RestaurantCategories renderButtons />
            </Box>
          </Box>
        </Container> 
      </Box>
      <Box className="hp__other-pages-wrapper">
        <Container maxWidth="lg" >
          <div className="hp__other-pages-heading">
            <img src={shakeHandsImg} alt="" />
            <h2>Hai sa reusim impreuna</h2>
          </div>
          <Grid className="hp__other-pages-column-wrapper" container spacing={24}>
            <Grid item xs={12} md={6} lg={4} >
              <img src={riderImage} alt='' />
              <h3>Devino curier</h3>
              <p>Fii propriul tău șef! Bucură-te de flexibilitate, libertate și câștiguri competitive livrând cu Glovo.
              </p>
              <AppButton
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <img src={partnersImage} alt='' />
              <h3>Devino partener</h3>
              <p>Dezvoltă-ți afacerea cu Glovo! Tehnologia noastră și baza noastră de utilizatori te poate ajuta să crești vânzările și să descoperi noi oportunități!
              </p>
              <AppButton   
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <img src={careersImage} alt='' />
              <h3>Cariere</h3>
              <p>Ești gata pentru o nouă provocare interesantă? Dacă ești ambițios, modest și iubești să lucrezi cu alții, atunci dorim să ne contactezi!
              </p>
              <AppButton   
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
          </Grid> 
        </Container>
      </Box>
    </>
  )
}

export default Homepage


export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
  
  const query = queryFactory(apiQueries.category, `${context.query.category}`)
  await store.dispatch<AppDispatch>(fetchRestaurantsData(query))
  const state = await store.getState()

  return {
    props: {
      restaurants: state.dataReducer.data
    }
  }
})


