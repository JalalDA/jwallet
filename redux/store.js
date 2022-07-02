import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import loginReducer from './reducers/login'
import rpm from 'redux-promise-middleware'
import {createLogger} from 'redux-logger'

const persistConfig = {
    key : "persist",
    storage
}
const logger = createLogger()
const reducers = combineReducers({
    login : loginReducer
})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer : persistedReducer,
    middleware : [rpm, logger]
})