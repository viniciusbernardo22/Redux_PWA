import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'contador',
    initialState: {
        total: 0
    }, 
    reducers: {
        incrementar: (state) => {
           state.total++
        },
        reduzir: (state) => {
            state.total--
         },
    }
})


export default slice.reducer;
export const {incrementar, reduzir} = slice.actions;