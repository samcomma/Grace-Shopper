import axios from 'axios'
import {
  LOGGED_IN_USER,
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_ALL_USER_ORDERS,
  GET_ONE_USER_ORDER,
  GET_ORDER_LINEITEMS
} from './constants'

//action creator
const getLoggedUser = user => ({
  type: LOGGED_IN_USER,
  user
})

const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const addToCart = cart => ({
  type: ADD_TO_CART,
  cart
})

const getAllUserOrders = orders => ({
  type: GET_ALL_USER_ORDERS,
  orders
})

const getOneUserOrder = order => ({
  type: GET_ONE_USER_ORDER,
  order
})

const getOrderLineitems = lineitems => ({
  type: GET_ORDER_LINEITEMS,
  lineitems
})

//thunks
export const loginUserThunk = user => {
  return dispatch => {
    return axios.put('/api/users/login', user).then(({ data }) => {
      dispatch(getLoggedUser(data))
    })
  }
}

export const getAllProductsThunk = () => {
  return dispatch => {
    return axios
      .get('/api/products')
      .then(({ data }) => dispatch(getAllProducts(data)))
  }
}

export const addToCartThunk = (product) => {
  return dispatch => {
    return axios
      .post(`api/orders`, product)
      .then(({ data }) => dispatch(addToCart(data)))
      .catch(error => dispatch({ type: 'POST_FAILURE', error: error.message }))
  }
}

///api/users/${userId}/orders/${orderId}/lineitem

export const getAllUserOrdersThunk = userId => {
  return dispatch => {
    return axios
      .get(`/api/users/${userId}/orders`)
      .then(({ data }) => dispatch(getAllUserOrders(data)))
  }
}

export const getOneUserOrderThunk = (userId, orderId) => {
  return dispatch => {
    return axios
      .get(`/api/users/${userId}/orders/${orderId}`)
      .then(({ data }) => dispatch(getOneUserOrder(data)))
  }
}

export const getOrderLineitemsThunk = (userId, orderId) => {
  return dispatch => {
    return axios
      .get(`/api/users/${userId}/orders/${orderId}/lineitems`)
      .then(({ data }) => dispatch(getOrderLineitems(data)))
  }
}
