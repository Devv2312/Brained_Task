import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
        addUser: (state, action ) => {
            state.push(action.payload);
        }
    }
});

export const { addUser } = userslice.actions;
export default userslice.reducer;

