import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultStore = {products: [], product: {}}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_ALL_PRODUCTS, products})
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const gotProducts = () => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(getProducts(data))
    } catch (err) {
      console.log('Something went wrong', err)
    }
  }
}

export const gotOneProduct = id => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(getSingleProduct(data))
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
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
