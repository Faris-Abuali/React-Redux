import axios from "axios";
import { Dispatch } from "redux";
import { userActions } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: userActions.FETCH_USERS_REQUEST,
    };
}

export const fetchUsersSuccess = (users: any[]) => {
    return {
        type: userActions.FETCH_USERS_SUCCESS,
        payload: users
    };
}

export const fetchUsersFailure = (error: any) => {
    return {
        type: userActions.FETCH_USERS_FAILURE,
        payload: error,
    };
}

/**
 * The above 3 functions are action creators where each returns an action (object).
 * Now we need to create an action creator that returns a function: (By making use of thunk middleware).
 * 
 * The below action creator is specail, it returns a function that receives `dispatch` as an argument.
 */
export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest()); // this wil lset loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users
                const users = response?.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error?.message));
            });
    };
}