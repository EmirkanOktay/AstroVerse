import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const base = "https://api.nasa.gov/";
const key = "QH9EcDuRaw3hXVkh03LQ4xHMDtHEAh9KyVKc4K7I";

const date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
let endDate = `${yyyy}-${mm}-${dd}`;

let startDate = new Date(date);
startDate.setDate(date.getDate() - 7);

let startDD = String(startDate.getDate()).padStart(2, '0');
let startMM = String(startDate.getMonth() + 1).padStart(2, '0');
let startYYYY = startDate.getFullYear();
let formattedStartDate = `${startYYYY}-${startMM}-${startDD}`;

const url = `${base}neo/rest/v1/feed?start_date=${formattedStartDate}&end_date=${endDate}&api_key=${key}`;

interface AstreiodState {
    data: any,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
}

const initialState: AstreiodState = {
    data: null,
    status: 'idle',
    error: null
}

export const AstreiodDataGet = createAsyncThunk(
    'astreiod/fetchAsteroids',
    async (_, { rejectWithValue }) => {
        try {

            const response = await axios.get(url)
            const data = response.data.near_earth_objects;
            return data;
        } catch (error: any) {
            console.log("API request error:", error.response ? error.response.data : error.message);
            return rejectWithValue(error.response?.data || error.message);
        }
    })

const AstreiodSlicer = createSlice({
    name: "astreiod",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AstreiodDataGet.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(AstreiodDataGet.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded'
                state.data = action.payload;
            })
            .addCase(AstreiodDataGet.rejected, (state, action: any) => {
                state.status = 'failed'
                state.error = action.payload as string;
            })
    }
})
export default AstreiodSlicer.reducer;

