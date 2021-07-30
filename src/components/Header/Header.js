import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Navbar, Button, NavDropdown } from 'react-bootstrap'
import logo from './../../images/waiv-logo.png'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='about' href="#/about"> <Button variant="outline-warning">About</Button>{' '}</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='about' href="#/about">About</Nav.Link>
    <Nav.Link className='nav-element' href="#sign-in"><Button variant='outline-light'>Log In</Button></Nav.Link>
    <Nav.Link className='nav-element' href="#sign-up"><Button variant='warning'>Join for Free</Button></Nav.Link>
  </Fragment>
)

const home = (
  <Navbar.Brand href="#/home">
    <img src={logo} alt='Waiv Magazine logo'/>
  </Navbar.Brand>
)

const unHome = (
  <Navbar.Brand href="#/">
    <img src={logo} alt='Waiv Magazine logo'/>
  </Navbar.Brand>
)
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/">Home</Nav.Link>
//   </Fragment>
// )         { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
const otherOptions = (
  <Fragment>
    <NavDropdown.Item href="#home/create-article">New</NavDropdown.Item>
    <NavDropdown.Divider />
  </Fragment>
)

const Header = ({ user, guestId }) => (
  <Navbar >
    { user ? home : unHome }
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <NavDropdown className='dropdown' title={user.email} id="collasible-nav-dropdown">
          { user && guestId === user.email ? otherOptions : null }
          <NavDropdown.Item href="#my-profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id='n' href="#sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

//    { alwaysOptions }
// <Nav.Link href="#/">Home</Nav.Link>

export default Header
