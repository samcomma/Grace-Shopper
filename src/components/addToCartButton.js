import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCartThunk } from '../redux/actions'

class AddToCartButton extends Component {
  constructor() {
    super()
    this.state = {
      addedToCart: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(ev, product) {
    ev.preventDefault()
    console.log(this.props.addToCart(product))
    await this.props.addToCart(product)
    this.setState({
      addedToCart: true
    })
  }

  render() {
    const { product } = this.props
    return (
      <div>
        <button type='button' onClick={(ev)=> this.handleClick(ev, product)}>Add To Cart</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    addToCart: (product)=> dispatch(addToCartThunk(product))
  }
}


export default connect(null, mapDispatchToProps)(AddToCartButton)