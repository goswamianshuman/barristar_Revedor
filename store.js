import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducers'
const middleware = [thunk];

const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    devtools
))
export default store