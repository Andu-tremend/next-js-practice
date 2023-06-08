import { ApiService } from "../API.service";
import RestaurantsRepository from "@/Classes/Repositories/restaurants.repository";
import { Server } from "@/Classes/Enums/server.enums";
import { useFetchParams } from "@/Interfaces/fetch";

export default class RestaurantService extends ApiService{
  constructor() {
    super(new RestaurantsRepository(Server.url))
  }

  getData (path:useFetchParams["path"], query?: useFetchParams["query"], id?: number) {
    return this.repository.get(path, query, id)
    .then(
      (res: any) => {
        return res.data
      }
    )
  }

}