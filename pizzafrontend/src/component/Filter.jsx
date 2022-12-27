import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Col, Form,Row,Button} from 'react-bootstrap'
import { filterPizza } from '../actions/PizzaAct'

const Filter = () => {
    const dispatch = useDispatch()
    const [searchkey,setSearchkey] = useState('')
    const [category,setcategory] = useState('all')
  return (
    <>
        <Form className='mt-2 bg-dark p-3' >
            <Row>
                <Col>
                    <Form.Control
                    value={searchkey}
                    onChange={(e)=>{setSearchkey(e.target.value)}}
                    placeholder='Enter pizza name to search'/>
                </Col>
                <Col>
                    <Form.Select value={category}
                    onChange={(e)=>{setcategory(e.target.value)}}>
                        <option>all</option>
                        <option>veg</option>
                        <option>nonveg</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Button onClick={()=>{dispatch(filterPizza(searchkey,category))}} >Search</Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default Filter
