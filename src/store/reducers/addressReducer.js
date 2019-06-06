import { createReducer } from 'redux-starter-kit'

const initialState = {
  address: []
}

export const addressReducer = createReducer(initialState, {
  SET_ADDRESS: (state, action) => {
    state.address = action.data
  }

})