import { userActions } from "./userTypes";

export type UserObject = {
    id: number,
    name: string,
    username: string,
}

export type UserState = {
    loading: boolean;
    users: UserObject[];
    error: string;
};

export type UserAction = {
    type: keyof userActions;
    payload: any;
}

const initialState: UserState = {
    loading: false,
    users: [],
    error: "",
};

export const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case userActions.FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
        }
        case userActions.FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action?.payload,
            error: "",
        }
        case userActions.FETCH_USERS_FAILURE: return {
            loading: false,
            users: state.users, // keep the previous state
            error: action?.payload,
        }
        default: return state;
    }
}

export default userReducer;