import React,{useEffect} from 'react'
import {Container,Row,Col,Spinner} from "react-bootstrap"
import Pizza from '../component/Pizza'
import {useSelector,useDispatch} from 'react-redux'
import {getAllPizzas} from '../actions/PizzaAct'
import Filter from '../component/Filter'

export const Homescr = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzasReducer)
  const {loading,pizzas,error} = pizzaState
  useEffect(()=>{
      dispatch(getAllPizzas())
  },[dispatch])
  return (
    <>
    <Container>
    {loading ? <Spinner/> : error ?
     (<h1>Eror in fetching</h1>) : 
     <Row>
      <Filter/>
            {pizzas.map((piza)=>(
                <Col md={4} key={piza.name}>
                    <Pizza piza={piza}/>
                </Col> 
            ))}
        </Row>
    }
        
    </Container>
    </>
  )
}
