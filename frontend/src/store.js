import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventDetailsReducer, eventListReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
})
const store = configureStore({
    reducer: rootReducer,
    preloadedState: {}
})

export default store