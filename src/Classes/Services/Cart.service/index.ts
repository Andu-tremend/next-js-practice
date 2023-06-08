
import { Server } from "@/Classes/Enums/server.enums";
import RestaurantsRepository from "@/Classes/Repositories/restaurants.repository";
import { useFetchParams } from "@/Interfaces/fetch";
import { ApiService } from "../API.service";
import FoodMenu from "@/Interfaces/foodMenu";
import Order from "@/Interfaces/order"

export default class CartService extends ApiService{

  constructor() {
    super(new RestaurantsRepository(Server.url))
  }

  protected generateOrderContent(restaurantName: string, order: FoodMenu[]) {
    return {
      restaurant: restaurantName,
      order: order
    }
  }

  protected generateUpdateOrderContent(order: Order, menuItem: FoodMenu) {
    return {...order,
      order: order.order.filter( (val:any) => {
        return val !== menuItem
      }) 
    }
  }

  // Post content to cart DB array
  addToCart(path:useFetchParams["path"], restaurant: string, content: FoodMenu[]) {
    const orderObject = this.generateOrderContent(restaurant, content )
    return this.repository.post(path, orderObject).then(
      (res: any) => {
        return res.data
      }
    )
  }

  // Delete order from cart in DB
  deleteOrder(path:useFetchParams["path"], id: number) {
    return this.repository.delete(path, id ).then(
      (res: any) => {
        return res.data
      }
    )
  }

  // Update order in DB -> doar sterge din mancaruri momentan si updateaza comanda cu
  // un nou array fara elementul exclus
  updateOrder(path:useFetchParams["path"], id: number, order: Order, menuItem: FoodMenu) {
    const contentToUpdate = this.generateUpdateOrderContent(order, menuItem)
    return this.repository.put(path, id, contentToUpdate ).then(
      (res: any) => {
        return res.data
      }
    )
  }
}