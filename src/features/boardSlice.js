import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boards: []
};

const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        reset: () => initialState,
        setBoards: (state, action) => {
            state.boards = action.payload
        },
        addBoard: (state, action) => {
            state.boards.push(action.payload)
            localStorage.setItem("Boards", JSON.stringify(state.boards));
        }
    }
})

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;