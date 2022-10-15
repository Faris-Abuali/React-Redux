import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator is a function that returns an action
export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    };
};
export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    };
};

const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action: any) => {
    // return new state based on action
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action: any) => {
    // return new state based on action
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state, numOfCakes: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
/**
 * Turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.
 */
const logger = createLogger(); // logger is a middleware
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => { });
/**
 * subscribe() Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.
 */
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();