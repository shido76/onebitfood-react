import { createReducer } from 'redux-starter-kit'

const initialState = {
  modalType: null,
  modalProps: {}
}

export const modalReducer = createReducer(initialState, {
  SHOW_MODAL: (state, action) => {
    return {
      modalType: action.modalType,
      modalProps: action.modalProps
    }
  },
  HIDE_MODAL: (state, action) => {
    return initialState
  }

})