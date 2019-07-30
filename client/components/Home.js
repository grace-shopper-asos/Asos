import React from 'react'
import {Button, Carousel} from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h3 className="title">3D Printed Jewelry</h3>
      <div className="center-btn">
        <Button className="button">Shop Now</Button>
      </div>
      <div className="carousel-size">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/v4PC2mD.png"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Get custom 3D Printed Jewelry!</h3>
              <p>Earrings and Necklaces</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/REOylDc.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h3>Get custom 3D Printed Jewelry!</h3>
              <p>Earrings and Necklaces</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/6Fw5sBV.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h3>Get custom 3D Printed Jewelry!</h3>
              <p>Earrings and Necklaces</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
