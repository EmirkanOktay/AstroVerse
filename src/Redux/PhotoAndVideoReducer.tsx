import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

interface PhotoandVideoState {
    data: any,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PhotoandVideoState = {
    data: null,
    status: 'idle',
    error: null
}

export const getImage = createAsyncThunk(
    'astreiod/fetchAsteroids',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?media_type=image&year_start=2023&year_end=2024`)
            const data = response.data;
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)

export const getVideo = createAsyncThunk(
    'astreiod/fetchAsteroids',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://images-api.nasa.gov/search?media_type=video&year_start=2023&year_end=2024`)
            const data = response.data;
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)

const ImageSlicer = createSlice({
    name: "image",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getImage.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getImage.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })

            .addCase(getImage.rejected, (state, action: any) => {
                state.status = 'failed';
                state.data = action.payload as string;
            })

    }
})


const VideoSlicer = createSlice({
    name: "Video",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVideo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getVideo.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getVideo.rejected, (state, action: any) => {
                state.status = 'failed';
                state.data = action.payload as string;
            })
    }
})

export const imageReducer = ImageSlicer.reducer;
export const videoReducer = VideoSlicer.reducer;
