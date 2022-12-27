export const addToCart = (pizza,quantity,varient)=>{
    return(
        (dispatch,getState)=>{
            var cartItem = {
                name: pizza.name,
                _id: pizza._id,
                image: pizza.image,
                varient: varient,
                quantity: Number(quantity),
                prices: pizza.prices,
                price: pizza.prices[0][varient] * quantity
            }
            if(cartItem.quantity>10){
                alert("you can add only 10 pizza")
            }else{
                if(cartItem.quantity<1){
                    dispatch({type:"DEL_FROM_CART",payload: pizza})
                }else{
            dispatch({type:"ADD_TO_CART",payload: cartItem})
            localStorage.setItem('cartItems',
            JSON.stringify(getState().cartitemReducer.cartItems))
                }
            }
        }
    )
}
export const delFromCart = (pizza)=>{
return(
    (dispatch,getState)=>{
        dispatch({type:"DEL_FROM_CART",payload: pizza})
        localStorage.setItem("cartItems",JSON.stringify(getState().cartitemReducer.cartItems))
    }
)
}






