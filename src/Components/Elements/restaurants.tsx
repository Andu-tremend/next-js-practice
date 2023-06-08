import Grid from "@mui/material/Grid";
import { Restaurant } from '../../Interfaces/restaurant';
import Card from "@/Components/Cards/Card";
import CardFooter from "@/Components/Cards/Card.footer";
import CardHeader from "@/Components/Cards/Card.header";
import NoResults from "@/Components/Elements/no.results";
import { useDispatch } from "react-redux";
import { singleRestaurantAction } from "@/Stores/Actions";
import RestaurantService from "@/Classes/Services/Restaurant.service";
import { useRouter } from "next/router";

interface Restaurants {
  restaurants: Restaurant[],
  limit? : number
}
const Restaurants = ({restaurants, limit}: Restaurants ) => {

  const router = useRouter()

  // Use props to limit restaurants in hp to 20 and the rest to show all
  const allRestaurants = limit !== undefined ? 
  restaurants.slice(0, limit) : 
  restaurants

  const mappedRestaurants  = allRestaurants?.map( (restaurant: Restaurant) => {

    const stringToUrl = (string: string | undefined) => {
      let url = string
      url = url?.toLowerCase()
      url = url?.split(" ").join("-")
      return url
    }
    const restaurantUrl = stringToUrl(restaurant.name)

    const handleCardLink = () => {
        const restaurantData = new RestaurantService()
        restaurantData.getData("restaurants", [{key: "name", value: restaurant.name}] )
        .then( (res:any) => {
          router.push(`restaurants/${restaurantUrl}`)
         })
    }

    return (
      <Grid onClick={handleCardLink} item xs={12} sm={6} md={6} lg={4}>
          <Card>
            <CardHeader
            id={restaurant.id}
            hasBackground={true}
            name={restaurant.name}
            picture={restaurant.picture}
            discount={restaurant.discount}
            discountValue={restaurant.discountValue}/>
            <CardFooter  rating={restaurant.rating}
            delivery={{
              time: restaurant.delivery?.time,
              fee: restaurant.delivery?.fee,
              promotion: restaurant.delivery?.promotion
            }}
          
            id={restaurant.id}  />
          </Card>
      </Grid>
    )
  })

  return (
    <Grid container spacing={4}>
      {mappedRestaurants?.length > 0 ? 
      mappedRestaurants : 
      <NoResults errorText="Nu s-a gasit niciun rezultat pentru restaurantul dorit, mai incercati" /> }
    </Grid>
  )
}

export default Restaurants