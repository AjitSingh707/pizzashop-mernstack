import React,{useState,useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom"
import {Container,Form,Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import { loginUser } from '../actions/userAct'

const Loginscr = () => {
  const[password,setpassword] = useState('')
  const[email,setemail] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
        navigate('/')
    }
  }, [navigate])
  const loginHandler = ()=>{
    const userinfo = {password,email}
    dispatch(loginUser(userinfo))
  }
  return (
    <>
        <Container>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email} onChange={(e)=>{setemail(e.target.value)}}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
      </Form.Group>
      
      <Button variant="primary" onClick={loginHandler}>
        LogIn
      </Button>
      <pre>Not User Register here  <Link to='/register' >Register</Link> </pre>
    </Form>
        </Container>
    </>
  )
}

export default Loginscr
