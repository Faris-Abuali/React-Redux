import { BUY_CAKE } from "./cakeTypes"

type CakeAction = {
    type: typeof BUY_CAKE,
    payload: number
}
type CakeState = {
    numOfCakes: number
}

const initialState = {
    numOfCakes: 10,
}

const cakeReducer = (state: CakeState = initialState, action: CakeAction) => {
    console.log(action);
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: (state.numOfCakes) - (action.payload)
        }
        default: return state
    }
}

export default cakeReducer;