import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <header>
    
        {/* <div classNameName="container">
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
        </div> */}

<Navbar expand="lg" id='navbar' className="bg-body-tertiary" >
      <Container>
        <Link to="/">
            <h2>Workout Buddy</h2>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Navigation