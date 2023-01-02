import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './caller.services'

export const getUser = createAsyncThunk('getUser', async () => {
    try {
        const { data } = await Axios.post('/profile')

        return data
    } catch (error) {
        // return custom error message from API if any
        // if (error.response && error.response.data.message) {
        //     return rejectWithValue(error.response.data.message)
        // } else {
        //     return rejectWithValue(error.message)
        // }
    }
})

export const editUserName = createAsyncThunk(
    'editUser',
    async (edit, { rejectWithValue }) => {
        try {
            const { data } = await Axios.put('/profile', edit)

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
