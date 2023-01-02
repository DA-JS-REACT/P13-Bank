import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/_features/login.slice'
import userReducer from '@/_features/user.slice'

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        user: userReducer,
    },
})
