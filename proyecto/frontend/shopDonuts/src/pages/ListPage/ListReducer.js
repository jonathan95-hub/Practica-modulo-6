import { ALL_DONUTS } from "./ListAction";

const initialState ={
    Donuts: []
}

const DonutsReducer = (state = initialState, action) => {
    const{type, payload} = action
    switch(type){
        case ALL_DONUTS:
            return{
                ...state,
                Donuts: payload
            }
        default:
            return state
    }
}

export default DonutsReducer