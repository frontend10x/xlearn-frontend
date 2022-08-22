import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import {persistStore,persistReducer} from "redux-persist";
import { diagnosticReducer } from "../reducers/diagnosticReducer";

import storage from "redux-persist/lib/storage";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'persist-key',
    storage
}


const reducers = combineReducers({
    auth: authReducer,
    questions: diagnosticReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk)
        )
    );
export const persistor = persistStore(store)