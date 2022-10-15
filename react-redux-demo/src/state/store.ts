import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
    // Now our store has 2 middlewares: logger and thunk
    // Thunk middleware allows us to write action creators that return a function instead of an action.
);

export default store;
