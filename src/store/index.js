import {createStore, compose, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory} from 'react-router';
import rootReducer from '../reducers/rootReducer';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export function configureStore(history=hashHistory, initialState=undefined) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

    // store.subscribe(()=>{
    //     localStorage.setItem('reduxState', JSON.stringify(store.getState().usersState))
    // });

    return store;
}
