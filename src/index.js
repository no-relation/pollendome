import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "./state/reducers/index";
import { initialState } from './state/initial';
import 'semantic-ui-css/semantic.min.css'
import { store } from './state/store';

// const middleware = compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// const store = createStore(rootReducer, initialState, middleware)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
