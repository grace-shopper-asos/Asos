import React, {Component} from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
  removeOneFromState,
  deleteItems,
  updateCartStatus,
  getOpenOrders
} from '../store/cart'
import {Link} from 'react-router-dom'

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickUpdate = this.handleClickUpdate.bind(this)
  }

  componentDidMount() {
    this.props.getOpenOrders()
  }

  handleClick(products) {
    this.props.deleteFromCart(products[0])
  }

  handleClickTest(product) {
    this.props.removeOneFromState(product)
  }

  handleClickUpdate(product) {
    this.props.updateCartStatus(product)
  }

  render() {
    console.log('my props', this.props.cart.cart)

    return (
      <div>
        <div className="title">Your cart</div>
        <Row className="single-product-margin">
          {this.props.cart.cart.map((product, i) => (
            <div key={i}>
              <Col className="product-center">
                <Row>
                  <Col sm={3}>
                    <img
                      className="products-image-size"
                      src={product.imageUrl}
                    />
                  </Col>
                  <Col sm={3} className="product-title">
                    <h1>{product.title}</h1>
                  </Col>
                  <Col sm={3} className="price">
                    <h1>${product.price}</h1>
                  </Col>
                  <Col sm={3} className="x">
                    {product.orders ? (
                      <div>
                        <h1>quantity:{product.orders.length}</h1>
                        <Button
                          className="button"
                          onClick={() => this.handleClick(product.orders)}
                        >
                          X
                        </Button>
                      </div>
                    ) : (
                      <div className="center-button-submit">
                        <h1>quantity:1</h1>
                        <Button
                          className="button"
                          onClick={() => this.handleClickTest(product)}
                        >
                          X
                        </Button>
                      </div>
                    )}
                  </Col>>
                </Row>
              </Col>
            </div>
          ))}
        </Row>
        <div className="center-button-submit">
          {this.props.cart.cart.length ? (
            <Link to="/checkout">
              <Button
                onClick={() => this.handleClickUpdate(this.props.cart.cart)}
                className="button"
              >
                Submit Order
              </Button>
            </Link>
          ) : null}
        </div>
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
    removeOneFromState: product => dispatch(removeOneFromState(product)),
    deleteFromCart: product => dispatch(deleteItems(product)),
    updateCartStatus: product => dispatch(updateCartStatus(product)),
    getOpenOrders: () => dispatch(getOpenOrders())
  }
}

export default connect(mapState, mapDispatch)(Cart)
