import Container from "@mui/material/Container"
import CheckoutContainer from "@/Containers/Checkout.container"

const MyOrders = () => {
  return (
    <>
      <Container maxWidth="lg" >
          <h1 style={{textAlign: "center"}}>My Orders</h1>
          <CheckoutContainer />
      </Container>
    </>
  )
}

export default MyOrders