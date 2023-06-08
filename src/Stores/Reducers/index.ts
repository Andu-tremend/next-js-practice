import { combineReducers } from "redux"
import { SearchReducer,FilterReducer, RestaurantName, DataAction } from "@/Classes/Enums/redux.enums"
import FoodMenu from "@/Interfaces/foodMenu"
import { cartActions } from "@/Classes/Enums/addToCartEnums"
import { Restaurant } from "@/Interfaces/restaurant"
import RestaurantsRepository from "@/Classes/Repositories/restaurants.repository"
import { Server } from "@/Classes/Enums/server.enums"
import { AxiosResponse } from "axios"
import { HYDRATE } from "next-redux-wrapper"

export const searchReducer = (state = {key: "q", value: ""}, action: {type: string, payload: any}) => {
  switch(action.type) {
    case SearchReducer.search : 
      return {
        ...state,
        value: action.payload
      }
  }

  return state
}


export const filterReducer = (state = {key: "category" , value: ""}, action: {type: string, payload: any}) => {
  switch(action.type) {
    case FilterReducer.filter: 
      return {
        ...state,
        value: action.payload

      }
  }
  return state
}

export const restaurantPageReducer = (state: Restaurant = {}, action: {type:string, payload: any}) => {
  switch (action.type) {
    case RestaurantName.name: 
      return {
        ...state, 
        restaurant: action.payload
      }
  }

  return state
}

export interface CartMenu extends FoodMenu {
  count?: number
  totalPrice: number
}

const initialState: CartMenu[] = []

export const cartReducer = (cartList = initialState, action: {type: string, payload: any}) => {

  const dispatchedCartItem = {
    ...action.payload,
    count: 1
  }

  const isDuplicated = cartList.find((item) => {
    return item.foodId === dispatchedCartItem.foodId
  })

  const updatePrice = () => {
    if (isDuplicated !== undefined) {
      const index = cartList.indexOf(isDuplicated)
      const currentFood = cartList[index]
      currentFood.count!++
      currentFood.totalPrice! = dispatchedCartItem.foodPrice! * currentFood.count!
    }
  }

  switch (action.type) {
    case cartActions.add:  
      
      if (cartList.length < 1) {
        cartList.push(dispatchedCartItem)        
      } else {
        if (isDuplicated === undefined) {
          cartList.push(dispatchedCartItem)
        } else {
          updatePrice()
        }
      }
      
      return [
        ...cartList
      ]

    case cartActions.increment: 
      updatePrice()
      return [
        ...cartList
      ]

    case cartActions.remove:
      return cartList.filter( item => {
        if ( item.count! <= 1) {
          return item !== action.payload
        } else {
          if (isDuplicated !== undefined) {
            if (item === action.payload) {
              item.count!--
              item.totalPrice = item.totalPrice - item.foodPrice!
            }
            return cartList
          }
        }
      })
  }
  return cartList
}

const dataReducerInitialState = {
  loading: false, 
  data: [],
  error: "",
  log: "initial"
}
const dataReducer = (state = dataReducerInitialState, action: {type: string, payload: any}) => {
  switch(action.type) {
    case DataAction.success:
      return {
        ...state,
        loading: false,
        data: action.payload,
        log: "loaded"
      }
    case DataAction.start: 
      return {
        ...state,
        loading: true,
        data: [],
        log: "loading"
      }

    case DataAction.err: 
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        log: "error loading"
      }
  }

  return state
}

const ssrReducer= (state = {}, action: {type: string, payload: any}) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  }

  return state
}

export default combineReducers({
  searchReducer,
  filterReducer,
  restaurantPageReducer,
  cartReducer,
  dataReducer,
  ssrReducer
})