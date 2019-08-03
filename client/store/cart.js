import axios from 'axios'
import store from './index'

///// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART = 'CLEAR_CART'

//// INITIAL STATE
const initialState = {
  cart: []
}

///// ACTION CREATORS

export const addToCart = product => ({type: ADD_TO_CART, product})

export const removeItem = product => ({
  type: REMOVE_ITEM,
  product
})

export const clearCart = () => ({type: CLEAR_CART})

////// THUNK CREATORS

//adding product to orders table
export const addToOrder = product => async dispatch => {
  try {
    await axios.post('/api/orders', product)
  } catch (error) {
    console.error(error)
  }
}
//deleting product to orders table
export const deleteItems = product => async dispatch => {
  try {
    dispatch(removeItem(product))

    await axios.delete(`/api/orders/${product.id}`)
  } catch (error) {
    console.error(error)
  }
}
//LOADING CART
export const reloadCart = () => async dispatch => {
  try {
    store.getState().cart.cart.map(eachProduct => {
      dispatch(addToOrder(eachProduct))
    })
    dispatch(clearCart())
    // const {data} = await axios.get('/api/orders')
    // data.map(eachProduct => {
    //   for (let i = 0; i < eachProduct.orders.length; i++) {
    //     dispatch(addToCart(eachProduct))
    //   }
    // })
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.product]}
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      }
    case CLEAR_CART:
      return {...state, cart: []}
    default:
      return state
  }
}
