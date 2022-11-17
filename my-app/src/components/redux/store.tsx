
import { configureStore } from '@reduxjs/toolkit'
import CoordSlice from '../redux/slice'


export const store = configureStore({
    reducer: {
        coords: CoordSlice.reducer,

    }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;