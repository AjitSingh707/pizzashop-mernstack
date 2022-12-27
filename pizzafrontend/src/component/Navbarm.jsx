import React from 'react'
import {Container,Nav,Navbar,Image,Dropdown} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../actions/userAct'; 

function Navbarm() {
  
  const cartState = useSelector(state => state.cartitemReducer)
  const loggedUser = useSelector(state => state.loginUserReducer)
  const dispatch = useDispatch()
  const {currentUser} = loggedUser
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand> 
          <Image src='images/logo.png' alt='logo' style={{height:"50px"}} fluid /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          {
            currentUser ? (<LinkContainer to="/">
              {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
              <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {currentUser.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <LinkContainer to='/order' ><Dropdown.Item> Order</Dropdown.Item></LinkContainer>
                    
                    <Dropdown.Item onClick={()=>{dispatch(logoutUser())}}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </LinkContainer>):(<>
              <LinkContainer to='/login'>
                  <Nav.Link >LogIn</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
                  <Nav.Link >Register</Nav.Link>
              </LinkContainer>
            </>)
          }
          <LinkContainer to='/cart' >
            <Nav.Link >Cart {cartState.cartItems.length}</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarm;