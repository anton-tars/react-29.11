import {createStore, applyMiddleware, compose} from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from "../reducers"
import middlewares from '../middlewares';
import reduxLogger from "redux-logger";

const persistConfig = {
    key: 'messenger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messenger', 'profile'],
 };
 
export const history = createBrowserHistory();

function initStore() {
    const innitialStore = {};
    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                reduxLogger,
                ...middlewares
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
 
    const persistor = persistStore(store);
 
    return { store, persistor };

    // return createStore(
    //     initReducer,
    //     innitialStore,
    //     compose(
    //         applyMiddleware(...middlewares),
    //         applyMiddleware(reduxLogger),
    //         window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    //     ),
    // );
}

export default initStore;