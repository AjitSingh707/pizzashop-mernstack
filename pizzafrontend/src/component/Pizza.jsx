import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { addToCart } from "../actions/cartAct";

const Pizza = ({ piza }) => {
  const [varient, setVarient] = useState("small");
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const addToCarthandler = ()=>{
    dispatch(addToCart(piza,qty,varient))
  }

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Img
          variant="top"
          src={piza.image}
          style={{ height: "200px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{piza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients: </h6>
                <select
                  value={varient}
                  onChange={(e) => {
                    setVarient(e.target.value);
                  }}
                >
                  {piza.varients.map((varient) => (
                    <option value={varient} key={varient}>
                      {varient}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity: </h6>
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(10).keys()].map((val) => (
                    <option value={val + 1} key={val}>
                      {val + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <hr />
          <Row>
            <Col md={6}>Price: {piza.prices[0][varient] * qty}</Col>
            <Col md={6}>
              <Button className="bg-warning text-white" onClick={addToCarthandler} >
              Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{piza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={piza.image}
              style={{ height: "200px" }}
            />
          </div>
          <h5>Description: </h5>
          <h6>{piza.description}</h6>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
