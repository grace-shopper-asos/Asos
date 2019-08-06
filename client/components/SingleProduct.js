import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {gotOneProduct} from '../store'
import {addToOrder, addToCart} from '../store/cart'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.gotOneProduct(this.props.match.params.id)
  }
  handleClick(singleProduct) {
    this.props.addToCart(singleProduct)
    this.props.addingToOrder(singleProduct)
  }

  render() {
    const {product} = this.props
    if (typeof product.title === 'undefined') {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <div className="title">{product.title}</div>
          <Row className="single-product-margin">
            <Col sm={6} className="product-center">
              <img className="products-image-size" src={product.imageUrl} />
            </Col>
            <Col sm={6}>
              <div>{product.description}</div>
              <div className="price">${(product.price / 100).toFixed(2)}</div>
              <Button
                className="uppercase button-login"
                onClick={() => this.handleClick(product)}
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    product: state.product,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    gotOneProduct: id => dispatch(gotOneProduct(id)),
    addToCart: singleProduct => dispatch(addToCart(singleProduct)),
    addingToOrder: singleProduct => dispatch(addToOrder(singleProduct))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
