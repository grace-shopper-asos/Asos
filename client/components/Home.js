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
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/v4PC2mD.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/v4PC2mD.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home