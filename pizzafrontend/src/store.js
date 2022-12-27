import { legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzasReducer,addPizzaReducer,updatePizzaByIdReducer,
    getPizzaByIdReducer} from './reducer/Pizzareducer'
import { cartitemReducer } from './reducer/cartReducer'
import { registerUserReducer,loginUserReducer,allUserReducer } from './reducer/userReducer'
import { placeOrderReducer,allUserOrderReducer } from './reducer/orderReducer'
import { getUserOrderReducer } from './reducer/orderReducer'

const cartItemstorage = localStorage.getItem('cartItems') ?
 JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem("currentUser") ?
    JSON.parse(localStorage.getItem("currentUser")): null

const rootReducer = combineReducers({
    getAllPizzasReducer,cartitemReducer,registerUserReducer,loginUserReducer,
    placeOrderReducer,getUserOrderReducer,addPizzaReducer,getPizzaByIdReducer,
    updatePizzaByIdReducer,allUserOrderReducer,allUserReducer
})

const initialState = {
    cartitemReducer: {cartItems: cartItemstorage},
    loginUserReducer: {currentUser: currentUser}
}

const middleware = [thunk]

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store