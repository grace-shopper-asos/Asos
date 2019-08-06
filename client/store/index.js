import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import product from './product'
import cart from './cart'
import {loadState, saveState} from '../localStorage'

const reducer = combineReducers({user, product, cart})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const persistedState = loadState()
const store = createStore(reducer, persistedState, middleware)
store.subscribe(() => {
  saveState({
    cart: store.getState().cart
  })
})

export default store
export * from './user'
export * from './product'
