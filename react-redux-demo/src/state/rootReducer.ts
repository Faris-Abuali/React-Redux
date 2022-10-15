import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import cakeReducer2 from './cake/cakeReducer2';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    // cake: cakeReducer,
    cake: cakeReducer2,
    iceCream: iceCreamReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;