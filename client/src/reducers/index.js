import { combineReducers }                      from 'redux';
import { reducer as Form }                      from 'redux-form';
import auth from './auth.js'

const rootReducer = combineReducers({
    auth: auth
});

export default rootReducer;