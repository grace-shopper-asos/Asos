import React, {Component} from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
  updateDecreaseUnits,
  updateAddUnits,
  deleteItems,
  getAllOpen
} from '../store/cart'
import {Link} from 'react-router-dom'

export class Cart extends Component {
  constructor() {
    super()
    getAllOpen()
    this.handleClick = this.handleClick.bind(this)
  }
  // async componentDidMount() {
  //   await this.props.getAllOpen()
  // }

  handleClick(product) {
    this.props.deleteFromCart(product)
  }

  render() {
    console.log('wutsinprops', this.props)
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
                <h2>{product.title}</h2>
              </Col>
              <Col sm={3} className="product-quantity">
                <Button onClick={() => updateDecreaseUnits(product)}>
                  {' '}
                  -{' '}
                </Button>
                <h2>{product.quantity}</h2>
                <Button onClick={() => updateAddUnits(product)}> + </Button>
              </Col>
              <Col sm={3} className="price">
                <h2>${product.price}</h2>
              </Col>
              <Col sm={3} className="x">
                {/* <Button onClick={() => this.handleClick(product)}>X</Button> */}
              </Col>
            </div>
          ))}
          {this.props.cart.cart.length ? (
            <Link>
              <Button>Checkout</Button>
            </Link>
          ) : null}
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
    deleteFromCart: product => dispatch(deleteItems(product)),
    getAllOpen: () => dispatch(getAllOpen())
  }
}

export default connect(mapState, mapDispatch)(Cart)
