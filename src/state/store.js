import { rootReducer } from './reducers/index';
import { initialState } from './initial';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';

const middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(rootReducer, initialState, middleware)