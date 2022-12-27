export const placeOrderReducer = (state={},action)=>{
switch(action.type){
    case "PLACE_ORDER_REQ":
        return {loading: true}
        case "PLACE_ORDER_SUCC":
            return {loading: false, success: true}
        case "PLACE_ORDER_FAIL":
            return {loading: false, error: action.payload}
    default:
        return state
}
}

export const getUserOrderReducer = (state={orders: []},action)=>{
    switch(action.type){
        case "USER_ORDER_REQ":
            return {loading: true}
            case "USER_ORDER_SUCC":
                return {loading: false, success: true,orders: action.payload}
            case "USER_ORDER_FAIL":
                return {loading: false, error: action.payload}
        default:
            return state
    }
    }

export const allUserOrderReducer = (state={orders: []},action)=>{
        switch(action.type){
            case "ALL_ORDER_REQ":
                return {loading: true}
                case "ALL_ORDER_SUCC":
                    return {loading: false,orders: action.payload}
                case "ALL_ORDER_FAIL":
                    return {loading: false, error: action.payload}
            default:
                return state
        }
        }