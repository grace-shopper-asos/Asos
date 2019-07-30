import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'

const SingleProduct = () => {
  return (
    <div>
      <div className="title">Place holder for title</div>
      <Row className="single-product-margin">
        <Col sm={6} className="product-center">
          <img
            className="products-image-size"
            src="https://i.imgur.com/zuiYfUM.jpg"
          />
        </Col>
        <Col sm={6}>
          <div>Description dummy text</div>
          <div className="price">Price: $$$</div>
          <Button className="uppercase button-login">Add to cart</Button>
        </Col>
      </Row>
    </div>
  )
}

export default SingleProduct
