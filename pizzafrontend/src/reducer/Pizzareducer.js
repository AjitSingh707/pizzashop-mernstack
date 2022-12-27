export const getAllPizzasReducer = (state ={pizzas:[]},action)=>{
switch(action.type){
    case 'GET_PIZZAS_REQ':
        return {loading: true, ...state}
    case 'GET_PIZZAS_SUC':
        return {loading: false, pizzas: action.payload}
    case 'GET_PIZZAS_FAIL':
        return {loading: false, error: action.payload}
    default:
        return state
}
}

export const addPizzaReducer = (state ={},action)=>{
    switch(action.type){
        case 'ADD_PIZZA_REQ':
            return {loading: true, ...state}
        case 'ADD_PIZZA_SUC':
            return {loading: false,success: true, pizzas: action.payload}
        case 'ADD_PIZZA_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getPizzaByIdReducer = (state ={},action)=>{
    switch(action.type){
        case 'GET_pIZZABYID_REQ':
            return {loading: true, ...state}
        case 'GET_pIZZABYID_SUC':
            return {loading: false,success: true, pizza: action.payload}
        case 'GET_pIZZABYID_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updatePizzaByIdReducer = (state ={},action)=>{
    switch(action.type){
        case 'UPDATE_pIZZABYID_REQ':
            return {updateloading: true, ...state}
        case 'UPDATE_pIZZABYID_SUC':
            return {updateloading: false,updatesuccess: true}
        case 'UPDATE_pIZZABYID_FAIL':
            return {updateloading: false, updateerror: action.payload}
        default:
            return state
    }
}