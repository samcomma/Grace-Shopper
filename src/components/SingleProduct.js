import React from 'react'
import { connect } from 'react-redux'
import { addToCartThunk } from '../redux/actions'
import AddToCartButton from './AddToCartButton'

const SingleProduct = ({ product }) => {
  const { id, description, name, price, image } = product
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
        <li>{description}</li>
      </ul>
      <AddToCartButton product={ product }/>
    </div>
  )
}

const mapStateToProps = ({ products }, { match: { params } }) => {
  return {
    product:
      products.length &&
      products.find(product => product.id === Number(params.id))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (userId, lineitem) => dispatch(addToCartThunk(userId, lineitem))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct)
