export const registerUserReducer = (state={},action)=>{
switch(action.type){
    case "USER_REG_REQ":
        return {loading: true}
    case "USER_REG_SUCC":
        return {loading: false,success: true}
    case "USER_REG_ERR":
        return {loading: false, error: action.payload}
    default:
        return state
}
}

export const loginUserReducer = (state={},action)=>{
switch(action.type){
    case "USER_LOGIN_REQ":
        return {loading: true}
    case "USER_LOGIN_SUCC":
        return {loading: false,success: true,currentUser: action.payload}
    case "USER_LOGIN_FAIL":
        return{loading: false,error: action.payload}
    default:
        return state
}
}

export const allUserReducer = (state={users: []},action)=>{
    switch(action.type){
        case "ALL_USER_REQ":
            return {loading: true}
        case "ALL_USER_SUCC":
            return {loading: false,users: action.payload}
        case "ALL_USER_FAIL":
            return{loading: false,error: action.payload}
        default:
            return state
}
}







