import { createReducer } from 'redux-starter-kit'

const initialState = {
  restaurants: []
}

export const restaurantReducer = createReducer(initialState, {
  LOAD_RESTAURANTS: (state, action) => {
    return { 
      ...state,
      restaurants: action.data
    }
  }
})