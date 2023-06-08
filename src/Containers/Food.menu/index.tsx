import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@/Components/Cards/Card"
import CardHeader from "@/Components/Cards/Card.header"
import MenuInterface from "@/Interfaces/foodMenu"
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/Stores/Actions"

const Menu = ({menuData}: {menuData: MenuInterface[]}) => {

  const displayFlex = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem"
  }

  const store = useSelector( state => state)
  const dispatch = useDispatch()

  const addCartAction = (cartItem: any) => {
    dispatch(addToCart(cartItem))
  }

  const MenuItems = menuData?.map( (food, index) => {
    const description = `${food.foodDescription?.substring(0, 100)}...`

    if (!menuData) {
      return
    }

    return (
      <Grid key={index} item lg={6}>
        <Card variant={"outlined"} style={{padding: "1rem"}}>
          <CardHeader picture={food.foodPicture} name={food.foodName} description={description}/>
          <Box sx={displayFlex}>
            <div>{food.foodPrice} RON</div>
            <AddIcon className="addIcon" onClick={()=> {addCartAction(food)}}/>
          </Box>
        </Card>
      </Grid>
    )
  })
  return (
    <>
      <Grid container spacing={2}>
        {MenuItems}
      </Grid>
    </>
    
  )
}

export default Menu