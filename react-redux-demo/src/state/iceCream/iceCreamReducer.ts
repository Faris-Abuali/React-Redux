import { BUY_ICECREAM } from "./iceCreamTypes"

type IceCreamAction = {
    type: typeof BUY_ICECREAM
}
type IceCreamState = {
    numOfIceCreams: number
}

const initialState = {
    numOfIceCreams: 20,
}

const iceCreamReducer = (state: IceCreamState = initialState, action: IceCreamAction) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer;