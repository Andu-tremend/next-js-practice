/**
 * @jest-environment jsdom
 */

import FoodMenu from "Interfaces/foodMenu";
import CartService from "../../src/Classes/Services/Cart.service";

test("Test Cart Service generateOrderContent", () => {
  const cart = new CartService
  const foodMenuMockData = {
    foodName: "Pizza",
    foodDescription: "E buna pizza, ce descriere mai vrei",
    foodPrice: 22,
    foodPicture: "pictureUrl"
  }
  const mockFoodMenus:FoodMenu[] = [foodMenuMockData]
  const expected = {
    restaurant: "arg1",
    order: mockFoodMenus
  }

  // Test if is instance of CartService
  expect(cart).toBeInstanceOf(CartService)

  // Test if function returns
  expect(cart.generateOrderContent("arg1", mockFoodMenus)).toReturn

  // Test if function returns expected outcome
  expect(cart.generateOrderContent("arg1", mockFoodMenus)).toEqual(expected)

  // Test if function returns
  const orderContentOutput = cart.generateOrderContent("arg1", mockFoodMenus)
  expect(orderContentOutput.order[0].foodName).toContain("Pizza")

})