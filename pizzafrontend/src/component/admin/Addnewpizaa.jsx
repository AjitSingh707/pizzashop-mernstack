import React,{useState} from 'react'
import {Form,Button,Spinner,Alert} from 'react-bootstrap'
import { addPizza } from '../../actions/PizzaAct'
import {useDispatch,useSelector} from 'react-redux'

const Addnewpizaa = () => {
    const dispatch = useDispatch()
    const addPizzaState = useSelector(state => state.addPizzaReducer )
    const {loading,error,success} = addPizzaState
    const [name,setName] = useState('')
    const [smallprice,setSmallprice] = useState('')
    const [mediumprice,setMediumprice] = useState('')
    const [largeprice,setLargeprice] = useState('')
    const [image,setImage] = useState('')
    const [description,setDesc] = useState('')
    const [category,setCategory] = useState('')

    const submitForm = (e)=>{
        e.preventDefault()
        const pizzadata = {name,prices:{
            small: smallprice,medium: mediumprice,large: largeprice
        },image,description,category}
        dispatch(addPizza(pizzadata))
    }

  return (
    <>
      {loading && <Spinner/>}
      {error && <Alert variant='danger' >{error}</Alert>}
      {success && <Alert variant='success' >pizza added successfully</Alert>}
         <Form onSubmit={submitForm} className='bg-dark p-4 text-warning' >
      <Form.Group className="mb-3" controlId="pizzaname">
        <Form.Label>Pizza Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Pizza name" value={name} required
        onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="smallprice">
        <Form.Label>Small Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price of Small size"
        value={smallprice}
        onChange={(e)=>{setSmallprice(e.target.value)}} required
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mediumprice">
        <Form.Label>Medium Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price of Medium size"
        value={mediumprice} required
        onChange={(e)=>{setMediumprice(e.target.value)}}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="largeprice">
        <Form.Label>Large Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price of Large size"
        value={largeprice} required
        onChange={(e)=>{setLargeprice(e.target.value)}}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Pizza Image</Form.Label>
        <Form.Control type="text" placeholder="Add image url"
        value={image} required
        onChange={(e)=>{setImage(e.target.value)}}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category: </Form.Label>
        <Form.Control type="text" placeholder="Enter category of pizza"
        value={category} required
        onChange={(e)=>{setCategory(e.target.value)}}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description: </Form.Label>
        <Form.Control type="text" placeholder="Enter Description of pizza"
        value={description} required
        onChange={(e)=>{setDesc(e.target.value)}}
         />
      </Form.Group>
     
      <Button variant="primary" type='submit' >Add new pizza</Button>
    </Form>
    </>
  )
}

export default Addnewpizaa
