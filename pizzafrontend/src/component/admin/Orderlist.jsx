import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllOrders,deliverOrders } from '../../actions/orderAct'
import {Spinner,Alert,Table,Button} from 'react-bootstrap'

const Orderlist = () => {
  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.allUserOrderReducer)
  const {loading,error,orders} = orderstate
  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <div className='text-center'>
      <h3>order list</h3>
      {loading && <Spinner/>}
      {error && <Alert variant='danger' >{error}</Alert>}
      
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Email</th>
          <th>User Id</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map(order =>(
          <tr key={order._id} >
            <td>{order._id}</td>
            <td>{order.email}</td>
            <td>{order.userid}</td>
            <td>{order.orderAmount}/-</td>
            <td>{order.updatedAt.substring(0,10)}</td>
            <td>{order.isDelivered ? <p className='text-success' >Delivered</p>:
             <Button className='btn-danger'
             onClick={()=>{dispatch(deliverOrders(order._id))}} >Deliver</Button>}</td>
          </tr>
        ))}
      </tbody>
    </Table>
</div>
  )
}

export default Orderlist
