import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

type UserState = {
    loading: boolean;
    users: any[];
    error: string;
}    
const initialState: UserState = {
    loading: false,
    users: [],
    error: "",
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
}

const fetchUsersSuccess = (users: any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
}

const fetchUsersFailure = (error: any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
}

const userReducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action?.payload,
            error: "",
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action?.payload,
        }
        default: return state;
    }
}


const rootReducer = combineReducers({
    user: userReducer,
});


/**
 * redux-thunk middleware allows you to write action creators that return a function instead of an action object. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch` and `getState` as parameters.
 */
const fetchUsers = () => {
    return function (dispatch: any) {
        dispatch(fetchUsersRequest()); // will set loading to true
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const usersIDs = response.data.map((user: any) => user.id);
                dispatch(fetchUsersSuccess(usersIDs));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            });
    }
}

const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()); });
// Adds a change listener. It will be called any time an action is dispatched ☝️
store.dispatch(fetchUsers());