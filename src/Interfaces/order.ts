import FoodMenu from "./foodMenu";

export default interface Order {
  id: number,
  order: FoodMenu[],
  restaurant: string
}