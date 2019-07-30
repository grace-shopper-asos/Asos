import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

const Nav = () => {
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
            <Link className="nav-hover" to="/shop">
              Shop Now
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-padding-right">
            <Link className="nav-hover" to="/sign-in">
              Sign Up
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-padding-right">
            <Link className="nav-hover" to="/sign-in">
              Sign In
            </Link>
          </Navbar.Text>
          <Navbar.Brand>
            <Link className="nav-hover" to="/sign-in">
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

export default Nav
