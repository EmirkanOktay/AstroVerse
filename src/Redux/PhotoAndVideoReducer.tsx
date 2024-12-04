import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PhotoandVideoState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PhotoandVideoState = {
    data: null,
    status: 'idle',
    error: null
}

export const getImage = createAsyncThunk(
    'image/fetchImages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?media_type=image&year_start=2023&year_end=2024`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getVideo = createAsyncThunk(
    'video/fetchVideos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?media_type=video&year_start=2023&year_end=2024`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getImage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getImage.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getImage.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVideo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVideo.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getVideo.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const imageReducer = imageSlice.reducer;
export const videoReducer = videoSlice.reducer;
