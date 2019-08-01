import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getProductsInCart, removeFromCart} from '../store'

const Cart = props => {
  const productsInCart = props.cart
  console.log('dude wheres my cart', props)
  return (
    <div>
      <div className="title">Your cart</div>
      <Row className="single-product-margin">
        {productsInCart.map(product => (
          <div key={product.id}>
            <Col sm={3} className="product-center">
              <img className="products-image-size" src={product.imgUrl} />
            </Col>
            <Col sm={3} className="product-title">
              <h1>{product.title}</h1>
            </Col>
            <Col sm={3} className="price">
              <h1>{product.price}</h1>
            </Col>
            <Col sm={3} className="x">
              <Button onClick={() => props.removeFromCart(product)}>X</Button>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  )
}

const mapState = state => {
  return {
    cart: state.items
  }
}
const mapDispatch = dispatch => {
  return {
    getProductsInCart: () => dispatch(getProductsInCart()),
    removeProduct: product => dispatch(removeFromCart(product))
  }
}
export default connect(mapState, mapDispatch)(Cart)
