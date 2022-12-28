import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/_features/user.slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})
