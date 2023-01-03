import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './caller.services'
/**
 *@function
 * @returns {Promise<Void>}
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
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
