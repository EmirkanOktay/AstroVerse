import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://api.nasa.gov/';
const key = "QH9EcDuRaw3hXVkh03LQ4xHMDtHEAh9KyVKc4K7I";

interface MarsState {
    data: any,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MarsState = {
    data: null,
    status: 'idle',
    error: null
}

export const MarsDataGet = createAsyncThunk(
    'Mars/fetchMars',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${key}`)

            const data = response.data;
            return data.photos;

        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const MarsSlice = createSlice({
    name: 'Mars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(MarsDataGet.pending, (state) => {
                state.status = 'loading'

            })
            .addCase(MarsDataGet.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })

            .addCase(MarsDataGet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }

});

export default MarsSlice.reducer;
