import { SearchReducer, FilterReducer, RestaurantName, DataAction } from "@/Classes/Enums/redux.enums"
import FoodMenu from "@/Interfaces/foodMenu"
import { cartActions } from "@/Classes/Enums/addToCartEnums"
import { AxiosResponse } from "axios"
import RestaurantsRepository from "@/Classes/Repositories/restaurants.repository"
import { Server } from "@/Classes/Enums/server.enums"
import { useFetchParams } from "@/Interfaces/fetch"
import RestaurantService from "@/Classes/Services/Restaurant.service"
import { Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"

const EnumValues = {
  searchAction: SearchReducer.search,
  filterAction: FilterReducer.filter,
  nameAction: RestaurantName.name
}

export const searchAction = (searchTerm: string) => {
  return {
    type: EnumValues.searchAction,
    payload: searchTerm
  }
}

export const filterAction = (filterTerm: string) => {
  return {
    type: EnumValues.filterAction,
    payload: filterTerm
  }
}

export const singleRestaurantAction = (restaurantData: any) => {
  return {
    type: EnumValues.nameAction,
    payload: restaurantData
  }
}

export const addToCart = (foodToAdd: FoodMenu) => {
  return {
    type: cartActions.add,
    payload: foodToAdd
  }
}

export const removeFromCart = (foodToRemove: FoodMenu) => {
  return {
    type: cartActions.remove,
    payload: foodToRemove
  }
}

export const cartItemIncrement = (foodToRemove: FoodMenu) => {
  return {
    type: cartActions.increment,
    payload: foodToRemove
  }
}


export const getDataStart = () => {
  return {
    type: DataAction.start
  }
}

export const getDataSuccess = (data: any) => {
  return {
    type: DataAction.success,
    payload: data
  }
}

export const getDataError = (error: string) => {
  return {
    type: DataAction.err,
    payload: error,
  }
}

export interface UrlQueryParam {
  key: string, 
  value: any
}

export interface UrlQueryParam extends Array<UrlQueryParam>{}

// To do Ori le denumesti specific ori creezi functie generica



export const getRestaurantsData = ( queryVal?: {key: string, value: any}[] | undefined, id?: number) => {
    const restaurantServiceInstance = new RestaurantService()
    const restaurants = restaurantServiceInstance.getData(Server.pathRestaurants, queryVal, id)
    return  restaurants
}


export const fetchRestaurantsData = (queryVal?: {key: string, value: any}[] | undefined, id?:number) => {
  return (dispatch: any) => {
    dispatch(getDataStart())
    return getRestaurantsData(queryVal, id)
    .then( (data) => {
      return dispatch(getDataSuccess(data))
    })
    .catch( (error) => dispatch(getDataError(error)))
  }
}

