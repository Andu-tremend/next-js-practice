import Box from "@mui/material/Box"
import CartService from "@/Classes/Services/Cart.service"
import AppButton from "@/Components/Buttons/button/button"
import FoodMenu from "@/Interfaces/foodMenu"
import { Server } from "@/Classes/Enums/server.enums"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import calculatePrice from "@/Helper.functions/calculate.price"
import capitalize from "@/Classes/Helper/capitalize"
const CartCTA = (props: any) => {

  const router = useRouter()
  const cart = new CartService
  const totalItemsInCart = props.cartItems.length
  const totalPrice = calculatePrice(props.cartItems)

  const restaurantQuery:string = `${router.query.restaurant}`.split("-").join(" ")
  const restaurantName: string = capitalize(restaurantQuery)

  const handlePurchase = () => {
    cart.addToCart(Server.pathCart, restaurantName, props.cartItems)
    cart.getData(Server.pathCart).then((res: any) => console.log(res))
    router.push("/checkout")
  }
  
  if (totalItemsInCart < 1) {
    return (
      <>
      </>
    )
  }
  
  return (
    <Box sx={{margin: "4rem auto 0 auto", display: "flex", justifyContent: "center"}}>
      <AppButton 
      className='headerButton' 
      color='secondary' 
      label={`Comanda ${totalItemsInCart} pentru ${totalPrice} RON`} 
      onClick={() => {handlePurchase()}} 
      />
    </Box>
  )
}

export default CartCTA