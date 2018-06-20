import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  user: {
    username: '',
    token : ''
  }
}

export const actionTypes = {
  SET_USER_PROFILE: 'SET_USER_PROFILE'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_PROFILE:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export const loginSuccess = (user) => {
  localStorage.setItem('userProfile', JSON.stringify(user))

  return {
    type: actionTypes.SET_USER_PROFILE,
    user
  }
}

export const setUserProfile = () => {
  const userProfile = localStorage.getItem('userProfile')

  return {
    type: actionTypes.SET_USER_PROFILE,
    user: JSON.parse(userProfile)
  }
}

export function initializeStore(initialState = initialState) {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))

  return store
}
