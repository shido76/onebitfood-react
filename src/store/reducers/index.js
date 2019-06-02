import { restaurantReducer } from './restaurantReducer'
//import { otherReducer } from './otherReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  restaurantState: restaurantReducer,
  //otherState: otherReducer
})