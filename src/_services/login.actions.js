import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './caller.services'
/**
 * call async Api for Login user with Post
 * @function
 * @returns {Promise.<Void>}
 */
export const userLogin = createAsyncThunk(
    '/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await Axios.post('/login', credentials)

            // store user's token in local storage
            localStorage.setItem('userToken', data.body.token)

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
