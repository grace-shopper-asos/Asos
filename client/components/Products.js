import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotProducts} from '../store'

class Products extends React.Component {
  componentDidMount() {
    // console.log(this.props.getCandy())
    this.props.gotProducts()
  }

  render() {
    const {products} = this.props
    console.log(this.props)
    if (typeof products === 'undefined') {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <div className="title">
            3D Printed Jewelry<br />Buy Now
          </div>
          <Row className="center-products">
            {products.map((product, i) => (
              <Col sm={4} key={i}>
                <Link to={`/products/${product.id}`}>
                  <img className="products-image-size" src={product.imageUrl} />
                </Link>
                <Link to={`/products/${product.id}`}>
                  <div className="product-title">{product.title}</div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )
    }
  }
}

const mapState = state => {
  console.log(state)
  return {
    products: state.product.products
  }
}

const mapDispatch = dispatch => {
  return {
    gotProducts: () => dispatch(gotProducts())
  }
}

export default connect(mapState, mapDispatch)(Products)
