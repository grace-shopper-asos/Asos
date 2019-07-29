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
          <Link className="nav-hover" to="/">
            <img src="" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navbar.Text className="nav-padding-right">
            <Link className="nav-hover" to="/campuses">
              Shop Now
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-padding-right">
            <Link className="nav-hover" to="/students">
              Sign In
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav
