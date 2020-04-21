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


    - CombineReducers - all the reducers
    - applyMiddelware - PromiseMiddleware, SagaMiddleware
    - CreateStore - export to our application
    - 

*/




import { createStore, combineReducers, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import SagaMiddleware from 'redux-saga';
import CommonReducer from '../modules/common/reducers/common-reducer';
import CommonSagas from '../modules/common/sagas/common-sagas';

// this is when we have only 1 reducer
// export default createStore(CommonReducer);

const sagaMiddleware = SagaMiddleware();

const middlewares = [
    PromiseMiddleware,
    sagaMiddleware
]

// this is when we have more than 1 reducer
export default createStore(
    combineReducers({ $common: CommonReducer }),
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(CommonSagas);