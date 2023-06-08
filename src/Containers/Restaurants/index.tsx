import Restaurants from '@/Components/Elements/restaurants';
import CardWithLoading from '@/Components/Cards/Card.withLoading';
import useFetch from '@/Hooks/useFetch';
import { Server } from "@/Classes/Enums/server.enums";
import RestaurantsRepository from '@/Classes/Repositories/restaurants.repository';
import { useSelector } from 'react-redux';
import { Restaurant } from '@/Interfaces/restaurant';

const RestaurantsContainer = (props: {restaurantsData: Restaurant[], nrOfRestaurants?: number }) => {

  const RestaurantsWithLoading = CardWithLoading(Restaurants)
  
  return (
    <RestaurantsWithLoading 
      loading={false} 
      restaurants={props.restaurantsData}
      limit={props.nrOfRestaurants} 
    />
  )
  
};

export default RestaurantsContainer

