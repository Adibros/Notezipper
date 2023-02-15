import {Navbar,Container,Nav,NavDropdown,Form} from 'react-bootstrap';
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg" >
      <Container >
        <Navbar.Brand >
          <Nav.Link href="/">Notezipper</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className='m-auto'>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> 
            </Form>
          </Nav>

          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes">
              My Notes
            </Nav.Link>
            <NavDropdown title="Aditya" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>{
                localStorage.removeItem("userInfo");
                navigate("/");
              }}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
