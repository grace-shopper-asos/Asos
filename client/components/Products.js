import React from 'react'
import {Col, Row} from 'react-bootstrap'

const Products = () => {
  return (
    <div>
      <div className="title">
        3D Printed Jewelry<br />Buy Now
      </div>
      <Row className="center-products">
        <Col sm={4}>
          <img
            className="products-image-size"
            src="https://i.imgur.com/zuiYfUM.jpg"
          />
        </Col>
        <Col sm={4}>
          <img
            className="products-image-size"
            src="https://i.imgur.com/zuiYfUM.jpg"
          />
        </Col>
        <Col sm={4}>
          <img
            className="products-image-size"
            src="https://i.imgur.com/zuiYfUM.jpg"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Products
