import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'

const Nav = props => {
  const {user} = props
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="sticky white-nav"
      >
        <Navbar.Brand>
          <Link className="nav-hover logo" to="/">
            TCY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navbar.Text className="nav-padding-right">
            <Link className="nav-hover" to="/products">
              Shop
            </Link>
          </Navbar.Text>
          {!user.id ? (
            <div>
              <Navbar.Text className="nav-padding-right">
                <Link className="nav-hover" to="/signup">
                  Sign Up
                </Link>
              </Navbar.Text>
              <Navbar.Text className="nav-padding-right">
                <Link className="nav-hover" to="/login">
                  Sign In
                </Link>
              </Navbar.Text>{' '}
            </div>
          ) : (
            <Navbar.Text className="nav-padding-right">Logged in</Navbar.Text>
          )}
          <Navbar.Brand>
            <Link className="nav-hover" to="/cart">
              <img
                src="https://i.imgur.com/aolKGAl.png"
                style={{width: 35, marginTop: -7}}
              />
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// export default Nav
export default connect(mapStateToProps, null)(Nav)
