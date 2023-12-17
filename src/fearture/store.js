import { configureStore } from "@reduxjs/toolkit";
import TimeReducer from '../fearture/timeSlice'

const store = configureStore({
    reducer: {
        time: TimeReducer
    }
})

export default store