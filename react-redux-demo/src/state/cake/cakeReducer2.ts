import { createReducer } from "redux-act";
import * as actions from "./cakeActions2";
import { CakeState } from "./cakeReducer";

// Create a reducer
const initialState = {
    numOfCakes: 10,
}

// (ES6 syntax, see Advanced usage below for an alternative for ES5)
export const cakeReducer = createReducer({
    [actions.buyCake + ""]: (state: CakeState, payload: number = 1) => {
        return {
            ...state,
            numOfCakes: (state.numOfCakes) - payload
        }
    },
    [actions.addOneCake + ""]: (state: CakeState) => {
        return {
            ...state,
            numOfCakes: (state.numOfCakes) + 1
        }
    },
}, initialState); // <-- initialState is optional
// but initialState must not be empty if you plan to use this reducer inside a combineReducers.

export default cakeReducer;