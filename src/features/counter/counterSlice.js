import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        // actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        
    }
});

// export actions
export const { increment, decrement } = counterSlice.actions;

// export the full reducer
export default counterSlice.reducer;