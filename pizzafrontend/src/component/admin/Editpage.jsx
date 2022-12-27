import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getPizzaById,updatePizzaById } from '../../actions/PizzaAct'
import {Form,Button,Spinner,Alert} from 'react-bootstrap'

const Editpage = () => {
  const {pizzaId} = useParams()
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getPizzaByIdReducer)
  const editedPizzaState = useSelector(state => state.updatePizzaByIdReducer)
  const {updatesuccess,updateloading} = editedPizzaState
  const {pizza,error} = pizzastate
  useEffect(()=>{
    if(pizza){
      if(pizza._id === pizzaId){
        setName(pizza.name)
        setCategory(pizza.category)
        setDesc(pizza.description)
        setSmallprice(pizza.prices[0]['small'])
        setMediumprice(pizza.prices[0]['medium'])
        setLargeprice(pizza.prices[0]['large'])
        setImage(pizza.image)
      }else{
        dispatch(getPizzaById(pizzaId))
      }
    }else{
      dispatch(getPizzaById(pizzaId))
    }
  },[pizzaId,dispatch,pizza])

  const [name,setName] = useState('')
    const [smallprice,setSmallprice] = useState('')
    const [mediumprice,setMediumprice] = useState('')
    const [largeprice,setLargeprice] = useState('')
    const [image,setImage] = useState('')
    const [description,setDesc] = useState('')
    const [category,setCategory] = useState('')

    const submitForm = (e)=>{
      e.preventDefault()
      const editedpizzadata = {_id: pizzaId,name,prices:{
        small: smallprice,medium: mediumprice,large: largeprice
    },image,description,category}
    dispatch(updatePizzaById(editedpizzadata))
  }

  return (
    <>
        <h1 className='text-center bg-dark mt-1 text-warning p-2'>Edit page</h1>
        {updateloading && <Spinner/>}
      {error && <Alert variant='danger' >{error}</Alert>}
      {updatesuccess && <Alert variant='success' >pizza updateded successfully</Alert>}
      <div className='container' >
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
     
      <Button variant="primary" type='submit' >Update Pizza</Button>
    </Form>
    </div>  
    </>
  )
}

export default Editpage
