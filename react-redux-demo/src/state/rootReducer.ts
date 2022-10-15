import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;