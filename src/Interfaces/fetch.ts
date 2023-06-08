import RestaurantsRepository from "@/Classes/Repositories/restaurants.repository"
export type useFetchParams = {
  repository: RestaurantsRepository
  url: string, 
  path: string, 
  query?: {key: string, value: any}[],
}