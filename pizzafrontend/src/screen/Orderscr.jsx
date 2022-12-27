import React,{useEffect} from 'react'
import { getUserOrder } from '../actions/orderAct'
import {Spinner,Alert,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"

const Orderscr = () => {
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.getUserOrderReducer)
    const {loading,error,orders} = orderState
    
    useEffect(()=>{
        dispatch(getUserOrder())
    },[dispatch])

  return (
    <>
      <h1>Your Orders Are</h1>
      {loading && <Spinner/> }
      {error && <Alert variant='danger'>{error}</Alert>}
      {
        orders && orders.map(order =>(
            <div className='container border p-4 bg-light' key={order._id} >
            <Row>
                <Col md={4}  >
                {
                    order.orderitems.map(item => (
                        <h6 className='container' key={item._id} >{item.name} [{item.varient}] * 
                        {item.quantity} = {item.price} </h6>
                    ))
                }
                </Col>
                <Col md={4}>
                    <h5>Address: {order.shippingAddress.addres}
                     {order.shippingAddress.zip}</h5>
                </Col>
                <Col md={4}>
                    <h4>Amount: <span>{order.orderAmount}</span></h4>
                    <h5>Orderid: {order._id}</h5>
                </Col>
            </Row>
            </div>
        ))
      }
    </>
  )
}

export default Orderscr
