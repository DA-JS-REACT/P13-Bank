import { createSlice } from '@reduxjs/toolkit'
import { getUser, editUserName, userRegister } from '@/_services/user.actions'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
                state.error = null
            })
            .addCase(getUser.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
            .addCase(editUserName.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(editUserName.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.userInfo = {
                    ...state.userInfo,
                    firstName: action.payload.body.firstName,
                    lasttName: action.payload.body.lastName,
                }
            })
            .addCase(editUserName.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
            .addCase(userRegister.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.userInfo = {
                    ...state.userInfo,
                    firstName: action.payload.body.firstName,
                    lastName: action.payload.body.lastName,
                    email: action.payload.body.email,
                    password: action.payload.body.password,
                }
            })
            .addCase(userRegister.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default userSlice.reducer
export const { editUser } = userSlice.actions
