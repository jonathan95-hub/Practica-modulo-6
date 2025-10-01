import { combineReducers } from "redux"
import  userReducer  from "../../../components/user/userReducer"
import menuReducer from "../../../pages/HomePage/HomePageReducer"
import DonutsReducer from "../../../pages/ListPage/ListReducer"
import loginReducer from "../../../pages/LoginPage/LoginReducer"

const reducers = combineReducers({
    userReducer, 
    menuReducer,
    DonutsReducer,
    loginReducer
    
    
})


export default reducers