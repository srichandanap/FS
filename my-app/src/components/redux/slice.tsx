import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { useState } from 'react';




const initialState = {

    coords: {
        lat: 0,
        lng: 0
    }
}

export const coordSlice = createSlice({

    name: 'coord',
    initialState,
    reducers: {

        addCoords: (state: any, action: any) => {
            state.coordinates = action.payload;
        },

    },

})

export const { addCoords } = coordSlice.actions;


export default coordSlice