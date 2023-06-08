import FoodMenu from "./foodMenu"

export interface Restaurant {
  id?: string,
  name?: string, 
  picture?: string, 
  delivery?: {
    time?: string,
    fee?: number, 
    promotion?: boolean
  }
  deliveryCurrency?: string,
  rating?: number,
  discount?: boolean,
  discountValue?: number,
  category?: string,
  menu?: FoodMenu
}