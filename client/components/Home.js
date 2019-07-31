import React from 'react'
import {Button, Carousel} from 'react-bootstrap'
import {connect} from 'react-redux'

const Home = props => {
  console.log(props)
  const {user} = props
  return (
    <div>
      {user.id ? (
        <div className="user-log">Welcome back {user.email}</div>
      ) : (
        <div className="user-log">Please signin/sign up!</div>
      )}
      <h3 className="title">3D Printed Jewelry</h3>
      <div className="center-btn">
        <Button className="button">Shop Now</Button>
        {/* needs handlesubmit + dispatch */}
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
              src="https://i.imgur.com/KgV3nKE.jpg"
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Home)
