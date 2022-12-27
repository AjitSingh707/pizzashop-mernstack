import axios from 'axios'
import swal from 'sweetalert'

export const registerUser = (user)=>{
    return(
        async(dispatch)=>{
            dispatch({type: "USER_REG_REQ"})
            try {
                await axios.post('/api/users/register',user)
                dispatch({type: "USER_REG_SUCC"})
            } catch (error) {
                dispatch({type: "USER_REG_ERR",payload: error})
            }
        }
    )
}

export const loginUser = (userinfo)=>{
    return(
        async(dispatch)=>{
            dispatch({type:"USER_LOGIN_REQ"})
            try {
                const res = await axios.post('/api/users/login',userinfo)
                
                dispatch({type:"USER_LOGIN_SUCC",payload: res.data})
                localStorage.setItem("currentUser",JSON.stringify(res.data))
                window.location.href = '/'
            } catch (error) {
                dispatch({type:"USER_LOGIN_FAIL",payload:error})
            }
        }
    )
}

export const logoutUser = ()=>{
    return(
        (dispatch)=>{
            localStorage.removeItem('currentUser')
            window.location.href = '/login'
        }
    )
}

export const allUserData = ()=>{
    return(
        async(dispatch)=>{
            dispatch({type:"ALL_USER_REQ"})
            try {
                const res = await axios.get('/api/users/allusers')
                dispatch({type:"ALL_USER_SUCC",payload: res.data})
            } catch (error) {
                dispatch({type:"ALL_USER_FAIL",payload:error})
            }
        }
    )
}

export const deleteUser = (userid)=>{
    return(
        async(dispatch)=>{
            try {
                await axios.post('/api/users/deleteuser',{userid})
                swal(`${userid} deleted successfully`)
                window.location.reload()
            } catch (error) {
                swal("error while deleting user");
            }
        }
    )
}

export const makeAdminUser = (userid)=>{
    return(
        async(dispatch)=>{
            try {
                await axios.post('/api/users/adminuser',{userid})
                swal(`${userid} is now admin successfully`)
                window.location.reload()
            } catch (error) {
                swal("error while setting admin user");
            }
        }
    )
}






