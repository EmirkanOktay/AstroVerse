import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://api.nasa.gov/';
const key = "QH9EcDuRaw3hXVkh03LQ4xHMDtHEAh9KyVKc4K7I";
const date = new Date();
const startDate = '2024-01-01'
let dd = String(date.getDate())
const mm = String(date.getMonth() + 1);
const yyyy = date.getFullYear();

let CurrentDate = `${yyyy}-${mm}-${dd}`;



interface ApotdState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ApotdState = {
    data: null,
    status: 'idle',
    error: null,
};

export const ApotdDataGet = createAsyncThunk(
    'Apotd/fetchApod',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base}planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${CurrentDate}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const ApotdSlice = createSlice({
    name: 'Apotd',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ApotdDataGet.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(ApotdDataGet.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(ApotdDataGet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default ApotdSlice.reducer;

