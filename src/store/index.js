import { combineReducers, configureStore } from "@reduxjs/toolkit"
import categoryReducer from './reducers/categorySlice'
import cartReducer from './reducers/cartSlice'

const rootReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
