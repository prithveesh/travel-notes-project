/*
    1. a function to createStore
    2. Reducer or a group of reducers
    3. Middlewares
        - Fetching Data from API - Saga
            - PromiseMiddleware
            - Saga Middleware
            - Thunk Middleware
        - Redux Dev Tool Middleware- 
        - Logging
        - Delays

*/
import { createStore, combineReducers } from 'redux';
import CommonReducer from '../modules/common/reducers/common-reducer';

// this is when we have only 1 reducer
// export default createStore(CommonReducer);


// this is when we have more than 1 reducer
export default createStore(
    combineReducers({ $common: CommonReducer })
);