import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch} from 'react-redux';
import { placeOrder } from '../actions/orderAct';

const Checkout = ({subTotal}) => {
  const dispatch = useDispatch()
  const tokenHandler = (token)=>{
    dispatch(placeOrder(token,subTotal))
  }
  return (
    <StripeCheckout 
    amount={subTotal *100}
    shippingAddress
    token={tokenHandler}
    stripeKey ="pk_test_51MFHOOSDpS1r7sQUKQnJVRxjermVEbUEkfKqAMta3LhYfHvejpHxJkapy3RdE1qMN28ZqWMDS5gv8w0kYac3z4rN00qVqB6T9Z"
    currency='INR'
     >
        <Button>Pay Now</Button>
    </StripeCheckout>
  )
}

export default Checkout



















