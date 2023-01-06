import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './caller.services'
/**
 * Call async Api  for user profile with Post
 * @function
 * @returns {Promise.<Void>}
 */
export const getUser = createAsyncThunk('getUser', async () => {
    try {
        const { data } = await Axios.post('/profile')

        return data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
})

/**
 * call async Api for Register user with Post
 * @function
 * @returns {Promise.<Void>}
 */
export const userRegister = createAsyncThunk(
    '/Sign-in',
    async (dataRegister, { rejectWithValue }) => {
        try {
            const { data } = await Axios.post('/signup', dataRegister)

            return data
        } catch (error) {
            console.log(error.message)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
/**
 * Call async Api for Edit lastname and firstname with Put
 * @function
 * @returns {Promise.<Void>}
 */
export const editUserName = createAsyncThunk(
    'editUser',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await Axios.put('/profile', payload)

            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
