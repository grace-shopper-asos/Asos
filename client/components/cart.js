import React, {Component} from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteItems} from '../store/cart'

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(product) {
    this.props.deleteFromCart(product)
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

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    deleteFromCart: product => dispatch(deleteItems(product))
  }
}

export default connect(mapState, mapDispatch)(Cart)