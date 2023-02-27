import {Navbar,Container,Nav,NavDropdown,Form} from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';


const Header = ( {setsearch} ) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler = () =>{
    dispatch(logout());
    navigate('/');
  }

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
                onSubmit={(e) => setsearch(e.target.value)}
              /> 
            </Form>
          </Nav>

          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {userInfo && 
            <Nav.Link href="/mynotes">
              My Notes
            </Nav.Link>}

            {userInfo && <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">            
              
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
