import React from 'react'
import { Container, Row, Col,Table,Image } from "react-bootstrap";
import {BsFillTelephoneForwardFill} from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "20px" }} >
        <Row>
            <Col md={6} >
                <h1>Your Pizza Shop</h1>
                <p>
          
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        
        <Table striped bordered hover className='text-center' >
      <thead>
        <tr>
          <th colSpan={4} className='bg-warning text-center' >---- Contact Details ----</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td><BsFillTelephoneForwardFill/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>ssss</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
</Col>
<Col md={6}>
    <Image src="images/farmhouse.jpg" fluid style={{height:"100%"}} />
</Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
