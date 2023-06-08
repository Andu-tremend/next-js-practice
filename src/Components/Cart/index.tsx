import Box from "@mui/material/Box";
import React from "react";
import emptyCart from "../../StaticFiles/SVGs/astronaut-grey-scale.svg"
import { connect } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartItemIncrement, removeFromCart } from "@/Stores/Actions";
import CartCTA from "@/Components/Cart.cta";
import { CartMenu } from "@/Stores/Reducers";

class Cart extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  renderEmpty() {
    return (
      <Box sx={{textAlign: "center", margin: "auto", padding: "1rem"}}>
        <img src={emptyCart.src} />
        <p>Nu ai adăugat încă niciun produs. Când vei adăuga, îl vei vedea aici!</p>
      </Box>
    )
  }

  renderCart(cartItems: CartMenu[]) {
    if (cartItems.length === 0) {
      return this.renderEmpty()
    }

    return cartItems?.map( (item) => {
      const handleRemove = () => {
        this.props.dispatch(removeFromCart(item))
      }

      const handleAddDuplicate = () => {
        this.props.dispatch(cartItemIncrement(item))
      }

      return (
        <Box>
          <Box sx={{display: "flex", justifyContent: "space-between", padding: " 2rem"}}>
            <h4>{item.count} x </h4>
            <p>{item.foodName}</p>
            <p>{!item.totalPrice ? item.foodPrice : item.totalPrice} RON</p>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <RemoveIcon onClick={() => {handleRemove()}} className="addIcon" />
          <AddIcon onClick={() => {handleAddDuplicate()}} className="addIcon"  />
          </Box>
        </Box>
      )
    })
  }

  
  render() {

    return (
      <>
        {this.renderCart(this.props.cartItems)}
        <CartCTA cartItems={this.props.cartItems} />
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ cartItems: state.cartReducer })

export default connect(mapStateToProps)(Cart)