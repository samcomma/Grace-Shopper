import {
  LOGGED_IN_USER,
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_ALL_USER_ORDERS,
  GET_ONE_USER_ORDER,
  GET_ORDER_LINEITEMS
} from './constants'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.user
    default:
      return state
  }
}

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart
    case GET_ORDER_LINEITEMS:
      return action.cart
    default:
      return state
  }
}

export const userOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USER_ORDERS:
      return action.orders
    case GET_ONE_USER_ORDER:
      return action.order
    default:
      return state
  }
}
