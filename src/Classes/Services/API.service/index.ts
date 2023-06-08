import RestaurantsRepository from '@/Classes/Repositories/restaurants.repository';
import { useFetchParams } from '@/Interfaces/fetch';


export class ApiService  {

  repository: RestaurantsRepository
 

  constructor (repository: RestaurantsRepository) {
    this.repository = repository
  }

  getData (path:useFetchParams["path"], query?: useFetchParams["query"]) {
    return this.repository.get(path, query)
    .then(
      (res: any) => {
        return res.data
      }
    )
  }

}