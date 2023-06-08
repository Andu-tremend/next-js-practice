import AxiosClient from "./axios.client";
import Repository from "./respository";

export default class RestaurantsRepository extends Repository <any> {
  constructor(baseUrl: string) {
    super()
    this.baseUrl = baseUrl
    this.client = new AxiosClient
  }

}