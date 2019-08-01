import React, {Component} from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteItems, deleteSingleItem} from '../store/cart'
// import Checkout from './payment'
/**
 * COMPONENT
 */

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(product, quantity) {
    this.props.deleteFromCart(product, quantity)
  }

  render() {
    console.log('my props', this.props)

    return (
      <div>
        <div className="title">Your cart</div>
        <Row className="single-product-margin">
          {this.props.cart.cart.map(product => (
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
                <Button onClick={() => this.handleClick(product)}>X</Button>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    deleteFromCart: product => dispatch(deleteItems(product)),
    deleteSingleFromCart: product => dispatch(deleteSingleItem(product))
  }
}

export default connect(mapState, mapDispatch)(Cart)
