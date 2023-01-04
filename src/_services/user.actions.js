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
 * Call async Api for Edit  with Put
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
