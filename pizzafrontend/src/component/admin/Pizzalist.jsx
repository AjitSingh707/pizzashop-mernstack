import React,{useEffect} from 'react'
import {Spinner,Table} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import {getAllPizzas,deletepizza} from '../../actions/PizzaAct'
import {FiEdit} from 'react-icons/fi'
import {TiDelete} from 'react-icons/ti'
import {Link} from 'react-router-dom'

export const Pizzalist = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzasReducer)
  const {loading,pizzas,error} = pizzaState
  useEffect(()=>{
      dispatch(getAllPizzas())
  },[dispatch])
  return (
    <>
    {loading ? <Spinner/> : error ?
     (<h1>Error in fetching</h1>) :
     (<div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Pizza</th>
                    <th>Pizza Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    pizzas && pizzas.map((pizza) =>(
                        <tr key={pizza.name}>
                            <td>
                                <img src={pizza.image} 
                                alt='pizzas' width='80px' height='70px'
                                
                                 />
                            </td>
                            <td>{pizza.name}</td>
                            <td>
                            Small: {pizza.prices[0]['small']} <br/>
                            Medium: {pizza.prices[0]['medium']} <br/>
                            Large: {pizza.prices[0]['large']} 
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                            <Link to={`/editpage/${pizza._id}`}>
                            <FiEdit style={{cursor:"pointer",fontSize:"25px"}} />
                            </Link>
                            &nbsp;  <TiDelete style={{cursor:"pointer",
                            color:"red",fontSize:"30px"}}
                             onClick={()=>{dispatch(deletepizza(pizza._id))}} />
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
    </Table>
    </div>)
    }
    </>
  )
}
export default Pizzalist