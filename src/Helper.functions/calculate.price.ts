import FoodMenu from "@/Interfaces/foodMenu"
import { CartMenu } from "@/Stores/Reducers"

 const calculatePrice = (cartItems: CartMenu[]) => {
  const prices = cartItems.map( item => {
    if (!item.totalPrice) return item.foodPrice
    return item.totalPrice
  })
  
  if (prices.length === 0) {
    return
  }

  return prices.reduce( (prevPrice:number, currentValue: number) => {
    return prevPrice + currentValue
  })
}

export default calculatePrice