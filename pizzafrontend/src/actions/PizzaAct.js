import axios from 'axios'
import swal from 'sweetalert'

export const getAllPizzas = ()=>{
    return(
        async(dispatch)=>{
            dispatch({type:'GET_PIZZAS_REQ'})
            try {
                const {data} = await axios.get('/api/pizzas/getAllPizzas')
                dispatch({type:'GET_PIZZAS_SUC',payload:data})
            } catch (error) {
                dispatch({type:'GET_PIZZAS_FAIL',payload: error.message})
                console.log("err: ",error)
            }
        }
    )
}

export const addPizza = (pizzadata)=>{
    return(
        async(dispatch)=>{
            dispatch({type:'ADD_PIZZA_REQ'})
            try {
                const res = await axios.post('/api/pizzas/addpizza',pizzadata)
                dispatch({type:'ADD_PIZZA_SUC',payload: res.data})
            } catch (error) {
                dispatch({type:'ADD_PIZZA_FAIL',payload: error.message})
                console.log("err: ",error)
            }
        }
    )
}

export const getPizzaById = (pizzaId)=>{
    return(
        async(dispatch)=>{
            dispatch({type:'GET_pIZZABYID_REQ'})
            try {
                const res = await axios.post('/api/pizzas/getpizzabyid',{pizzaId})
                dispatch({type:'GET_pIZZABYID_SUC',payload: res.data})
            } catch (error) {
                dispatch({type:'GET_pIZZABYID_FAIL',payload: error.message})
                console.log("err: ",error)
            }
        }
    )
}

export const updatePizzaById = (updatepizza)=>{
    return(
        async(dispatch)=>{
            dispatch({type:'UPDATE_pIZZABYID_REQ'})
            try {
                const res = await axios.post('/api/pizzas/updatepizzabyid',{updatepizza})
                
                dispatch({type:'UPDATE_pIZZABYID_SUC',payload: res.data})
                window.location.href = '/admin/pizzaslist'
            } catch (error) {
                dispatch({type:'UPDATE_pIZZABYID_FAIL',payload: error.message})
                console.log("err: ",error)
            }
        }
    )
}

export const deletepizza = (pizaid)=>{
    return(
        async(dispatch)=>{
            try {
                await axios.post('/api/pizzas/deletepizza',{pizaid})
                swal("Pizza Deleted successfully", "You clicked the button!", "success");
                window.location.href = '/admin/pizzaslist'
            } catch (error) {
                swal("error while deleting pizza");
            }
        }
    )
}

export const filterPizza = (searchkey,category)=>{
    return(
        async(dispatch)=>{
            let searchedpizza ;
            dispatch({type:'GET_PIZZAS_REQ'})
            try {
                const {data} = await axios.get('/api/pizzas/getAllPizzas')
                searchedpizza = data.filter((pizza)=>{
                    return pizza.name.toLowerCase().includes(searchkey)
                 })
                 
                 if(category !== 'all'){
                    searchedpizza = data.filter((pizza)=>{
                        return pizza.category.toLowerCase() === category
                    })
                 }
                 
                dispatch({type:'GET_PIZZAS_SUC',payload: searchedpizza})
            } catch (error) {
                dispatch({type:'GET_PIZZAS_FAIL',payload: error})
            }
        }
    )
}
