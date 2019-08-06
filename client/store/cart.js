import axios from 'axios'
import store from './index'

///// ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_CART = 'UPDATE_CART'
const OPEN_ORDERS_USER = 'OPEN_ORDERS_USER'

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

export const removeOneFromState = product => ({
  type: REMOVE_ONE,
  product
})

export const updateCart = product => ({type: UPDATE_CART, product})

export const getAllOpenUser = products => ({type: OPEN_ORDERS_USER, products})

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
export const deleteItems = order => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/orders/${order.id}`, order)
    dispatch(removeItem(data))
  } catch (error) {
    console.error(error)
  }
}

export const getOpenOrders = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/orders')
    dispatch(getAllOpenUser(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateCartStatus = product => async dispatch => {
  try {
    store.getState().cart.cart.map(eachProduct => {
      dispatch(updateCart(eachProduct))
    })
    await axios.put(`/api/orders`, product)
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  let removeOne
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.product]}
    case REMOVE_ITEM:
      removeOne = state.cart.findIndex(item => item.id === action.product.id)
      if (removeOne > -1) {
        return {
          ...state,
          cart: state.cart.filter((order, i) => i !== removeOne)
        }
      }
      return {
        ...state,
        cart: state.cart.filter(order => order.id !== action.product.id)
      }
    case UPDATE_CART:
      return {...state, cart: []}
    case OPEN_ORDERS_USER:
      return {...state, cart: action.products}
    default:
      return state
  }
}

//LOADING CART
// export const reloadCart = () => async dispatch => {
//   try {
//     store.getState().cart.cart.map(eachProduct => {
//       dispatch(addToOrder(eachProduct))
//     })
//     dispatch(clearCart())
//     // const {data} = await axios.get('/api/orders')
//     // data.map(eachProduct => {
//     //   for (let i = 0; i < eachProduct.orders.length; i++) {
//     //     dispatch(addToCart(eachProduct))
//     //   }
//     // })
//   } catch (error) {
//     console.error(error)
//   }
// }
