import axios from 'axios'

export const placeOrder = (token,SubTotal)=>{
    return(
        async(dispatch,getState)=>{
            dispatch({type: "PLACE_ORDER_REQ"})
            const currentUser = getState().loginUserReducer.currentUser
            const cartItems = getState().cartitemReducer.cartItems
            try {
                const res = await axios.post("/api/orders/placeorder",
                {token,SubTotal,currentUser,cartItems})
                dispatch({type: "PLACE_ORDER_SUCC"})
                console.log("re: ",res)
            } catch (error) {
                dispatch({type: "PLACE_ORDER_FAIL"})
                console.log("error: ",error)
            }
        }
    )
}

export const getUserOrder = ()=>{
    return(
        async(dispatch,getState)=>{
            const currentUser = getState().loginUserReducer.currentUser
            dispatch({type: 'USER_ORDER_REQ'})
            try {
                const res = await axios.post('/api/orders/getorders',
                {userid: currentUser.id})
                dispatch({type: 'USER_ORDER_SUCC',payload: res.data})
            } catch (error) {
                dispatch({type: 'USER_ORDER_FAIL',payload: error})
            }
        }
    )
}

export const getAllOrders = ()=>{
    return(
        async(dispatch)=>{
            
            dispatch({type: 'ALL_ORDER_REQ'})
            try {
                const res = await axios.get('/api/orders/getalluserorders')
                dispatch({type: 'ALL_ORDER_SUCC',payload: res.data})
            } catch (error) {
                dispatch({type: 'ALL_ORDER_FAIL',payload: error})
            }
        }
    )
}

export const deliverOrders = (orderid)=>{
    return(
        async(dispatch)=>{
            dispatch({type: 'GET_ALL_ORDER_REQ'})
            try {
                await axios.post('/api/orders/deliverorder',{orderid})
                alert("delivered success")
                const orders = await axios.get('/api/orders/getalluserorders')
                dispatch({type: 'GET_ALL_ORDER_SUCC',payload: orders.data})
                window.location.href = '/admin/orderlist'
            } catch (error) {
                dispatch({type: 'GET_ALL_ORDER_FAIL',payload: error})
            }
        }
    )
}






