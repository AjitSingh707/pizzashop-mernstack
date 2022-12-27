import {Nav,Container,Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"
import {MdLocalOffer} from "react-icons/md"

function Topbar() {
  return (
    <>
      <Navbar bg="dark" variant='dark' expand='lg'>
        <Container  fluid>
        <h6 className='text-light' >
        <MdLocalOffer className='text-warning'/> &nbsp;
        Free Home delivery on oredr above 500/- Rupees</h6>
        <Nav className='ms-auto' >
          <LinkContainer to='/' activeClassName="true" >
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about' activeClassName="true" >
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact' activeClassName="true" >
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/policies' activeClassName="true" >
            <Nav.Link>Term & Policy</Nav.Link>
          </LinkContainer>
        </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default Topbar;