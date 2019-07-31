import React from 'react'
import {Button, Carousel} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logout} from '../store'

const Home = props => {
  console.log(props)
  const {user, handleClick} = props
  console.log(props)
  return (
    <div>
      {user.id ? (
        <div>
          <div className="user-log">Welcome back {user.email}</div>
          <Button className="button button-margin-left" onClick={handleClick}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <div className="user-log">Please signin/sign up!</div>
        </div>
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

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleClick () {
//       dispatch(logout())
//         .then(() => {
//           ownProps.history.push('/')
//         })
//     }
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  // Hey, check it out! Because we pass the connected UserPage to a Route
  // (we do this in client/index.js), it receives the "route props"
  // (match, location, and history) as its "own props".
  const history = ownProps.history

  return {
    async handleClick() {
      const thunk = logout()
      await dispatch(thunk)
      history.push('/')
    }
  }
}

// gotProducts: () => dispatch(gotProducts())

export default connect(mapStateToProps, mapDispatchToProps)(Home)
