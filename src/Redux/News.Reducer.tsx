import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const base = "https://api.spaceflightnewsapi.net/v4/blogs/"

interface NewsState {
    data: any,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: NewsState = {
    data: { results: [] },
    status: "idle",
    error: null
}

export const NewsDataGet = createAsyncThunk(
    'News/fetchNews',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(base);
            const data = response.data;
            return data;
        }
        catch (error: any) {
            return rejectWithValue(error.response?.data | error.message)
        }
    }
)

const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(NewsDataGet.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(NewsDataGet.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(NewsDataGet.rejected, (state, action) => {
                state.status = 'failed';
                state.data = action.payload as string;
            })
    }
})
export default NewsSlice.reducer;

