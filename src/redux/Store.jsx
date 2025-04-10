import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice.jsx'


const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export default store;


