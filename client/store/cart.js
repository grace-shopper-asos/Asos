import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART' //single product page call handleclick
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const CHECKOUT = 'CHECKOUT'

/**
 * INITIAL STATE
 */
const defaultStore = {items: []}

/**
 * ACTION CREATORS
 */
const getCart = cartitems => ({type: GET_CART, cartitems})
const addToCart = (id, item) => ({type: ADD_TO_CART, id, item})
const deleteFromCart = id => ({type: DELETE_FROM_CART, id})
const checkoutCart = () => ({type: CHECKOUT})

/**
 * THUNK CREATORS
 */

//id, this is the product we want to send to our routes so that it updates our cart
export const updateCart = (id, item) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.put(`/api/cart/${id}`, item)
      dispatch(addToCart(data))
    } catch (err) {
      console.log('Something went wrong', err)
    }
  }
}

export const removeFromCart = (id, item) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.delete(`/api/cart/${id}`, item)
      dispatch(deleteFromCart(data))
    } catch (err) {
      console.log('Something went wrong', err)
    }
  }
}

export const getProductsInCart = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/cart')
      dispatch(getCart(data))
    } catch (err) {
      console.log('Something went wrong', err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultStore, action) {
  switch (action.type) {
    case GET_CART:
      return action.cartitems
    case ADD_TO_CART:
      return action.product
    case DELETE_FROM_CART:
      return action.product
    case CHECKOUT:
      return action.product
    default:
      return state
  }
}
