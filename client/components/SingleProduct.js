import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {gotOneProduct} from '../store'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.gotOneProduct(this.props.match.params.id)
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
              <div className="price">{product.price}</div>
              <Button className="uppercase button-login">Add to cart</Button>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    gotOneProduct: id => dispatch(gotOneProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
