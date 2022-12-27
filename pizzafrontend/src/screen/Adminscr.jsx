import React,{useEffect} from 'react'
import {Row,Col,Container,ButtonGroup,Button} from 'react-bootstrap'
import {useNavigate,Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'



const Adminscr = () => {
    const navigate = useNavigate()
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState
    useEffect(()=>{
        if(localStorage.getItem('currentUser')=== null || !currentUser.isAdmin){
            navigate('/')
        }
    })
  return (
    <>
    <Container>
    <Row>
        <h1 className='text-center bg-dark text-light p-2' >Admin Panel</h1>
            <Col md={3} >
                <ButtonGroup vertical style={{minHeight: "350px" }} >
                    <Button className='mt-2' 
                    onClick={()=>{navigate('userlist')}} >All Users</Button>
                    <Button className='mt-2' 
                    onClick={()=>{navigate('pizzaslist')}} >All Pizzas</Button>
                    <Button className='mt-2' 
                    onClick={()=>{navigate('orderlist')}} >All orders</Button>
                    <Button className='mt-2' 
                    onClick={()=>{navigate('addnewpizza')}} >Add New Pizza</Button>
                </ButtonGroup>
                
            </Col>
            <Col md={9} >
            <Outlet/>
            </Col>
            
        </Row>
    </Container>
        
    </>
  )
}

export default Adminscr
