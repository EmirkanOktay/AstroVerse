import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './Loading';
import ApotdReducer from './ApotdReducer';
import MarsReducer from './MarsReducer';
import NewsReducer from './News.Reducer';
import AstreiodReducer from './AstreiodReducer';
import { imageReducer, videoReducer } from './PhotoAndVideoReducer';

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        Apotd: ApotdReducer,
        Mars: MarsReducer,
        News: NewsReducer,
        Astreiod: AstreiodReducer,
        Image: imageReducer,
        Video: videoReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
