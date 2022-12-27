import React,{useState} from 'react'
import {Container,Form,Button, Alert} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../actions/userAct'

const Registerscr = () => {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[conpass,setconpass] = useState('')
    const dispatch = useDispatch()
    const regdata = useSelector(state => state.registerUserReducer)
    const {success} = regdata
    const registerHandler = ()=>{
        if(password !== conpass){
            alert("password is not matching")
        }else{
            const user = {name,email,password,conpass}
            dispatch(registerUser(user))
            setname('')
            setemail('')
            setconpass('')
            setpassword('')
        }
    }
  return (
    <>
      <Container>
      <Form>
      <h1>Registration</h1>
      { success? <Alert variant='success'>Your Registration is successfull</Alert>: null}
      <Form.Group className="mb-3" controlId="name" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  placeholder="Enter your name"
        value={name} onChange={(e)=>{setname(e.target.value)}} 
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={(e)=>{setpassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="conpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="text" placeholder="Password"
        value={conpass} onChange={(e)=>{setconpass(e.target.value)}} />
      </Form.Group>
      
      <Button variant="primary"  onClick={registerHandler} >
        Register
      </Button>
    </Form>
      </Container>
    </>
  )
}

export default Registerscr
