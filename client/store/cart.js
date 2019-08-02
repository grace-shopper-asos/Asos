import axios from 'axios'
import store from './index'

// ACTION TYPES
const ADD_UNIT = 'ADD_UNIT'
const REMOVE_UNIT = 'REMOVE_UNIT'
const GET_ALL_OPEN_ORDERS = 'GET_ALL_OPEN_ORDERS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART = 'CLEAR_CART'
const ADD_SINGLE_ITEM = 'ADD_SINGLE_ITEM'

const initialState = {
  item: {},
  cart: []
}
// ACTION CREATORS
//increment unit in cart TERESSA
export const addUnit = product => ({type: ADD_UNIT, product})

//decrement unit in cart TERESSA
export const removeUnit = product => ({type: REMOVE_UNIT, product})

//retrieve all open orders from the database TERESSA
export const getAllByUser = cart => ({type: GET_ALL_OPEN_ORDERS, cart})

//guest add to cart via single prod page
export const addToCart = product => ({type: ADD_TO_CART, product})

//guest remove from cart via cart page
export const removeItem = product => ({
  type: REMOVE_ITEM,
  product
})

export const addSingleItem = product => ({
  type: ADD_SINGLE_ITEM,
  product
})

export const clearCart = () => ({type: CLEAR_CART})

// THUNK CREATORS
//incrementing units update
export const updateAddUnits = product => async dispatch => {
  try {
    const {data} = await axios.put('/api/orders', product)
    dispatch(addUnit(data))
  } catch (error) {
    console.error(error)
  }
}

//decreasing units update
export const updateDecreaseUnits = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/orders/`, product)
    dispatch(removeUnit(data))
  } catch (error) {
    console.error(error)
  }
}

//get all open orders by user
export const getAllOpen = () => async dispatch => {
  try {
    // let id = 1
    const {data} = await axios.get('/api/orders')
    // console.log('whatisdata', data)
    // const filtered = data.filter(element => element.id === id)
    // console.log('hopful', filtered)
    dispatch(getAllByUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const completeOrder = currentCart => dispatch => {
  try {
    // console.log('CURRENT CART', currentCart)
    currentCart.map(async cartItem => {
      await axios.put('/api/orders', cartItem)
    })
    localStorage.clear()
    dispatch(clearCart())
  } catch (error) {
    console.error(error)
  }
}
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

export const reloadCart = () => async dispatch => {
  try {
    store.getState().cart.cart.map(eachProduct => {
      dispatch(addToOrder(eachProduct))
    })
    dispatch(clearCart())
    const {data} = await axios.get('/api/orders')
    data.map(eachProduct => {
      for (let i = 0; i < eachProduct.orders.length; i++) {
        dispatch(addToCart(eachProduct))
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_UNIT:
      return {...state, item: action.product}
    case REMOVE_UNIT:
      return {...state, item: action.product}
    case GET_ALL_OPEN_ORDERS:
      return {...state, cart: action.cart}
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.product]}
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      }
    case ADD_SINGLE_ITEM:
      return {...state, cart: [...state.cart, action.product]}
    case CLEAR_CART:
      return {...state, cart: []}
    default:
      return state
  }
}
