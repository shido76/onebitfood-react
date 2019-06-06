//import restaurants from "./restaurants"
// Restaurants
import { LOAD_RESTAURANTS, SHOW_MODAL, HIDE_MODAL, SET_ADDRESS } from "./action_types"
import api from "../services/api"

export const loadRestaurants = (category = null) => async (dispatch) => {
  let response = await api.loadRestaurants(category)
  dispatch({
    type: LOAD_RESTAURANTS,
    data: response.data.restaurants
  })
}

export const searchRestaurants = (search) => async (dispatch) => {
  let response = await api.searchRestaurants(search)
  dispatch({
    type: LOAD_RESTAURANTS,
    data: response.data.restaurants
  })
}

// Modal
export const showModal = (modalType, modalProps) => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  })
}
 
export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  })
}

// Address

export const setAddress = (address) => async (dispatch) => {
  dispatch({
    type: SET_ADDRESS,
    data: address
  });
}