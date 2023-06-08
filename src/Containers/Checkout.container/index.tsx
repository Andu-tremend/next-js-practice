import Card from "@/Components/Cards/Card"
import CartService from "@/Classes/Services/Cart.service"
import calculatePrice from "@/Helper.functions/calculate.price"
import { Server } from "@/Classes/Enums/server.enums"
import { useState, useEffect } from "react"
import Order from "@/Interfaces/order"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import FoodMenu from "@/Interfaces/foodMenu"
import Stack from '@mui/material/Stack';
import AppButton from "@/Components/Buttons/button/button"
import RemoveIcon from '@mui/icons-material/Remove';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
const CheckoutContainer = () => {

  const order:Order[] = []
  const [cartData, setCartData] = useState(order)
  const [updateOrders, setUpdateOrders] = useState(false)
  const cart = new CartService

  useEffect( () => {
    cart.getData(Server.pathCart).then( (res) => {
      setUpdateOrders(false)
      setCartData(res)
    })
  }, [updateOrders])

  const handleDeleteOrder = (id: number) => {
    cart.deleteOrder(Server.pathCart, id).then( (res) => {
      setUpdateOrders(true)
    })
  }
  const orders = cartData?.map( (order, index) => {
    const totalPrice = calculatePrice(order.order)

    const foodOrdered = order.order.map( (food:FoodMenu) => {

      // Aici se foloseste de fapt un Update sa completez CRUD
      const handleRemoveItem = (id:number) => {
        cart.updateOrder(Server.pathCart, id, order, food).then( (res) => {
          setUpdateOrders(true)
        })
      }
      return (
        <Card key={food.foodName} variant="outlined" elevation={0} style={{padding: "1rem", margin: "1rem 0"}}>
          <Grid container spacing={5} alignItems="center" >
            <Grid lg={2} item><img width="100px" style={{borderRadius: "100%"}}src={food.foodPicture} /></Grid>
            <Grid lg={6} item >
              <h4>{food.foodName}</h4>
              <p>{food.foodDescription}</p>
              <strong>{food.foodPrice} Ron</strong>
            </Grid>
            <Grid item sx={{marginLeft: "auto"}} justifySelf="flex-end">
              <RemoveIcon onClick={() => {handleRemoveItem(order.id)}} className="addIcon" />
            </Grid>
          </Grid>
        </Card>
      )
    })
    return (
      <Card key={order.id} style={{margin: "3rem 0"}}>
        <Accordion>
            <Grid container spacing={2} sx={{padding: "2rem"}} alignItems="center" >
              <Grid item xl={1} sm={12} sx={{ textAlign: "center"}} onClick={() => {handleDeleteOrder(order.id)}}>
                <ClearOutlinedIcon className="addIcon" />
              </Grid>
              <Grid item justifySelf="center" sm={12} xl={6}>
                <AccordionSummary>
                  <Box>
                    <h3><strong>{index + 1}. {order.restaurant}</strong></h3>
                    <div>Total price: {totalPrice} Ron</div>
                  </Box>
                </AccordionSummary>
              </Grid>
              <Grid item xl={5} sm={12} sx={{ textAlign: "right"}}>
                  {order.order.length !== 0 ?
                    <AppButton 
                    color={""} 
                    label={`Order for ${totalPrice} RON`} 
                    onClick={() => {alert("WIP Not implemented next step")}} />
                    :       
                    <Box>
                      Nu exista niciun item din meniu in aceasta comanda
                    </Box>
                  }
                </Grid>
            </Grid>
          
          <AccordionDetails>
            <Box sx={{padding: "0 2rem"}}>
              <h4>Order summary</h4>
              {foodOrdered}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Card>
    )
  })


  return (
    <>
      <Box >
        {orders}
      </Box>
    </>
  )
}

export default CheckoutContainer