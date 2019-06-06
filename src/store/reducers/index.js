import { restaurantReducer } from './restaurantReducer'
import { modalReducer } from './modalReducer'
import { addressReducer } from './addressReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  restaurantState: restaurantReducer,
  modalState: modalReducer,
  addressState: addressReducer
})