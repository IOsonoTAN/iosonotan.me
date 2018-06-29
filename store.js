import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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
  return {
    type: actionTypes.SET_USER_PROFILE,
    user
  }
}

export const logout = () => {
  return {
    type: actionTypes.SET_USER_PROFILE,
    user: initialState.user
  }
}

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export function initializeStore(initialState = initialState) {
  const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}
