import { createAction, createReducer } from 'redux-act';

// Create an action creator (description is optional)
export const buyCake = createAction('Buy number of cakes', (payload: number = 1) => payload);
export const addOneCake = createAction('insert a cake');
export const addCake = createAction('insert a cake',
    (numOfCakes: number, name: string) => ({ numOfCakes, name })
);
