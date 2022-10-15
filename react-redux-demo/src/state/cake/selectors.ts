import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import { UserObject } from '../user/userReducer';

export const selectUsersByQuery = createSelector(
    [
        // Usual first input - extract value from `state`
        (state: RootState) => state.user.users,
        // Take the second arg, `keyword`, and forward to the output selector
        (_state, keyword) => keyword
    ],
    // Output selector gets (`items, category)` as args
    (users, keyword) => users.filter((user: UserObject) => user.name.includes(keyword))
);