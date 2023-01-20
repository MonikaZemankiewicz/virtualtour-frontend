import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useCookies} from 'react-cookie'
import { useHistory } from "react-router-dom"
import { useState } from 'react';
import profileicon from '../images/profile-icon.png'

function OffcanvasExample() {
  const [token] = useCookies(['mytoken'])
  if(token['mytoken']){
    return (
      <>
          <Navbar key='sm' variant="dark" expand='sm'>
            <Container fluid>
              <Navbar.Brand href="/">360 Media</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/upload">Upload</Nav.Link>
                    { <NavDropdown
                      title="360"
                      id={`offcanvasNavbarDropdown-expand-sm`}
                    >
                      <NavDropdown.Item href="/images">Images</NavDropdown.Item>
                      <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">Virtual Tours</NavDropdown.Item>
                    </NavDropdown> }
                    <Nav.Link href="/login">Log out</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>                
                  </Form>
                    <Navbar.Brand href="/profile" className='profile_icon_div'>
                      <img src={profileicon} className='profile_icon'/>
                    </Navbar.Brand>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    );
  }
  else {
    return (
      <>
          <Navbar key='sm' variant="dark" expand='sm'>
            <Container fluid>
              <Navbar.Brand href="/">360 Media</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    { <NavDropdown
                      title="360"
                      id={`offcanvasNavbarDropdown-expand-sm`}
                    >
                      <NavDropdown.Item href="/images">Images</NavDropdown.Item>
                      <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">Virtual Tours</NavDropdown.Item>
                    </NavDropdown> }
                    <Nav.Link href="/login">Log in</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>                
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    );

  }
}

export default OffcanvasExample;