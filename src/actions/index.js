import restaurants from "./restaurants"
import { LOAD_RESTAURANTS } from "./action_types"

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  data: restaurants
})